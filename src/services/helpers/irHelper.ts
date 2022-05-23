import { copyObject } from '../../utils/objectHandler.js'
import { formatCnpj } from './cnpjHelper.js'
import { toBrazilianCurrency } from './currencyHelper.js'

import { Company } from '../../interfaces/companyInterface.js'
import { CategoryName } from '../../interfaces/categoryInterface.js'


const getMeanPricesAndSells = (ordersList: any[]) => {
	const { BUY_CORRECTION, SELL_CORRECTION } = makeCorrection()

	const meanPrices = {}
	const sellOrders = {}

	let previousYear = -Infinity
	const meanPricesLastYears = {}

	ordersList.forEach(order => {
		const actualBrokerName = order.broker.name
		const actualTickerName = order.ticker.name
		const actualYear = new Date(order.date).getFullYear()

		const isBuy = order.type.name === 'buy'
		const haveNoOrder = Boolean(previousYear === -Infinity)
		if (haveNoOrder) previousYear = actualYear
		const yearHaveChanged = Boolean(previousYear !== actualYear)

		if (yearHaveChanged) {
			meanPricesLastYears[previousYear] = copyObject(meanPrices)
			previousYear = actualYear
		}

		if (!meanPrices[actualBrokerName]) meanPrices[actualBrokerName] = {
			...order.broker,
			tickers: {},
		}
		const actualTickers = meanPrices[actualBrokerName].tickers

		if (!actualTickers[actualTickerName]) actualTickers[actualTickerName] = {
			...order.ticker,
			quantity: 0,
			totalPrice: 0,
		}
		const actualTicker = actualTickers[actualTickerName]

		if (isBuy) {
			actualTicker.quantity += order.quantity
			actualTicker.totalPrice += (order.quantity * order.price) * BUY_CORRECTION
		}

		if (!isBuy) {
			const lastMeanPrice = actualTicker.totalPrice / actualTicker.quantity
			actualTicker.quantity -= order.quantity
			actualTicker.totalPrice -= (lastMeanPrice * order.quantity) * SELL_CORRECTION

			if (!sellOrders[actualYear]) sellOrders[actualYear] = { orders: [] }
			sellOrders[actualYear].orders.push({
				ticker: order.ticker.name,
				previousMeanPrice: lastMeanPrice,
				sellMeanPrice: order.price,
				sellQuantity: order.quantity,
			})
		}
	})

	return {
		meanPrices,
		meanPricesLastYears,
		sellOrders,
	}
}


const makeMeanPriceLists = (meanPricesBrute: object) => {
	const brokersOrdersList = Object.values(meanPricesBrute)

	const meanPrices = brokersOrdersList.map(brokerOrder => {
		const { name, cnpj, tickers } = brokerOrder

		const brokerStr = makeBrokerStr(name, cnpj)
		const tickerList = Object.values(tickers)

		return {
			broker: name,
			meanPrices: makeMeanPricesForBroker(brokerStr, tickerList),
		}
	})

	return meanPrices
}


const makePastYearsMeanPrices = (lastMeanPricesBrute: object) => {
	const lastMeanPrices = copyObject(lastMeanPricesBrute)
	
	for (const [key, value] of Object.entries(lastMeanPrices)) {
		lastMeanPrices[key] = makeMeanPriceLists(value)
	}

	return lastMeanPrices
}


const formatSellOrders = (sellOrdersBrute: object) => {
	const sellOrders = copyObject(sellOrdersBrute)
	
	for (const [key, value] of Object.entries(sellOrders)) {
		sellOrders[key] = formatSellOrderYear(value)
	}

	return sellOrders
}


const makeCorrection = () => {
	const TRANSACTIONS_PERCENT_TAX = 0.03  // taxa de liquidação e emolumentos
	const correctionValue = TRANSACTIONS_PERCENT_TAX / 100
	return {
		BUY_CORRECTION: 1 + correctionValue,
		SELL_CORRECTION: 1 / (1 + correctionValue)
	}
}


const makeBrokerStr = (brokerName: string, brokerCnpj: string) => {
	const formattedCnpj = formatCnpj(brokerCnpj)
	return `CUSTÓDIA NA CORRETORA ${brokerName} CNPJ: ${formattedCnpj}.`
}

const makeMeanPricesForBroker = (brokerStr: string, tickersList: any[]) => {
	const meanPrices = []

	tickersList.forEach(ticker => {
		const { quantity, totalPrice, name, company, category } = ticker
		const tickerType = category.name as CategoryName

		const ordersStr = makeOrdersStr(name, totalPrice, quantity, tickerType)
		const companyStr = makeCompanyStr(company, tickerType)
		const tickerStr = `${ordersStr} // ${companyStr} // ${brokerStr}`

		meanPrices.push(tickerStr.toUpperCase())
	})

	return meanPrices
}

const makeOrdersStr = (
	tickerName: string,
	totalPrice: number,
	quantity: number,
	tickerType: CategoryName
) => {
	const companyType = {
		'Stock': 'Ações',
		'FII': 'Fundo FII',
		'BDR': 'BDR',
		'ETF': 'Fundo ETF',
	}
	const meanPrice = totalPrice / quantity
	const centsToRealsValue = meanPrice / 100
	const currencyValue = toBrazilianCurrency(centsToRealsValue)
	const type = companyType[tickerType] || 'Ações'

	return `${type} ${tickerName} // ${quantity} UNIDADES // CUSTO MÉDIO ${currencyValue}`
}

const makeCompanyStr = (company: Company, tickerType: CategoryName) => {
	const companyType = {
		'Stock': 'Empresa',
		'FII': 'Fundo',
		'BDR': 'Empresa',
		'ETF': 'Fundo',
	}
	const type = companyType[tickerType] || 'Empresa'

	return `${type} ${company.name} CNPJ: ${formatCnpj(company.cnpj)}`
}


const formatSellOrderYear = (sellOrderObj: any) => {
	const { orders } = sellOrderObj

	const formattedOrders = orders.map(order => {
		const { ticker,	previousMeanPrice,	sellMeanPrice,	sellQuantity } = order
		const [sellPrice, previousPrice] = [sellMeanPrice / 100, previousMeanPrice / 100]

		const balanceStr = (sellPrice > previousPrice) ? 'lucro' :  'prejuízo'
		const difference = (sellPrice - previousPrice)
		const balance = (difference * sellQuantity)

		const sellStr = `Venda de ${sellQuantity} ${ticker} ao preço médio de ${toBrazilianCurrency(sellPrice)}. Preço médio anterior: ${toBrazilianCurrency(previousPrice)}. Com um ${balanceStr} de ${toBrazilianCurrency(difference)} por unidade; total: ${toBrazilianCurrency(balance)}.`

		return sellStr.toUpperCase()
	})

	return formattedOrders
}




export {
	getMeanPricesAndSells,
	makeMeanPriceLists,
	makePastYearsMeanPrices,
	formatSellOrders,
}

