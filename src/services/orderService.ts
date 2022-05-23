import {
	tickerRepository,
	typeRepository,
	brokerRepository,
	orderRepository,
} from '../repositories/index.js'

import {
	formatTickersData,
	formatBrokersData,
} from './helpers/formatOrderHelper.js'

import { InsertOrderInfo } from '../interfaces/orderInterface.js'

import {
	NoBrokerError,
	NoTickerError,
	NoTypeError,
} from '../errors/index.js'


const getOrders = async (userId: number) => {
	const orders = await orderRepository.findByUser(userId)

	return orders
}


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

const createOrder = async ({ user, order }: InsertOrderInfo) => {
	await validateBroker(order.brokerId)
	await validateTicker(order.tickerId)
	await validateType(order.typeId)

	const orderData = {
		userId: user.id,
		...order,
	}
	delete orderData.date

	const createdOrder = await orderRepository.create(orderData)

	return createdOrder
}

const validateBroker = async (brokerId: number) => {
	const broker = await brokerRepository.findById(brokerId)
	if (!broker) throw new NoBrokerError(brokerId)

	return broker
}

const validateTicker = async (tickerId: number) => {
	const ticker = await tickerRepository.findById(tickerId)
	if (!ticker) throw new NoTickerError(tickerId)

	return ticker
}

const validateType = async (typeId: number) => {
	const type = await typeRepository.findById(typeId)
	if (!type) throw new NoTypeError(typeId)

	return type
}


export {
	getOrders,
	makeCreateOrderInfo,
	createOrder,
}
