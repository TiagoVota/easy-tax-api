import {
	tickerRepository,
	typeRepository,
	brokerRepository,
} from '../repositories/index.js'

import {
	formatTickersData,
	formatBrokersData,
} from './helpers/formatOrderHelper.js'


const makeCreateOrderInfo = async () => {
	const tickersData = await tickerRepository.findAll()
	const typesData = await typeRepository.findAll()
	const brokersData = await brokerRepository.findAll()

	const createOrderInfo = {
		tickers: formatTickersData(tickersData),
		types: typesData,
		brokers: formatBrokersData(brokersData),
	}
	
	return createOrderInfo
}


export {
	makeCreateOrderInfo,
}
