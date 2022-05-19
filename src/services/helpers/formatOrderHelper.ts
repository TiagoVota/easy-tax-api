import { Ticker } from '../../interfaces/tickerInterface.js'
import { Broker } from '../../interfaces/brokerInterface.js'


const formatTickersData = (tickersData: Ticker[]) => {
	const formatTickerData = (tickerData: Ticker) => {
		const formatTickerData = { ...tickerData }
		delete formatTickerData.categoryId
		delete formatTickerData.companyId
	
		return formatTickerData
	}

	const formatTickersData = tickersData.map(formatTickerData)

	return formatTickersData
}


const formatBrokersData = (brokersData: Broker[]) => {
	const formatBrokerData = (brokerData: Broker) => {
		const formatBrokerData = { ...brokerData }
		delete formatBrokerData.cnpj
	
		return formatBrokerData
	}

	const formatBrokersData = brokersData.map(formatBrokerData)

	return formatBrokersData
}


export {
	formatTickersData,
	formatBrokersData,
}
