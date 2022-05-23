import {
	tickerRepository,
	typeRepository,
	brokerRepository,
	orderRepository,
} from '../repositories/index.js'

import * as userService from './userService.js'

import {
	formatTickersData,
	formatBrokersData,
} from './helpers/formatOrderHelper.js'
import {
	formatSellOrders,
	getMeanPricesAndSells,
	makeMeanPriceLists,
	makePastYearsMeanPrices
} from './helpers/irHelper.js'
import { formatDate } from './helpers/dateHelper.js'

import { InsertOrderInfo, Order } from '../interfaces/orderInterface.js'

import {
	DeleteOrderError,
	NoBrokerError,
	NoOrderError,
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


const makeOrdersIR  = async (userId: number) => {
	const orders = await orderRepository.findByUser(userId)

	const {
		meanPrices,
		meanPricesLastYears,
		sellOrders,
	} = getMeanPricesAndSells(orders)

	const actualMeanPrices = makeMeanPriceLists(meanPrices)
	const pastYearsMeanPrices = makePastYearsMeanPrices(meanPricesLastYears)
	const formattedSellOrders = formatSellOrders(sellOrders)

	return {
		pastYearsMeanPrices,
		actualMeanPrices,
		sellOrders: formattedSellOrders,
	}
}


const createOrder = async ({ user, order }: InsertOrderInfo) => {
	await validateBroker(order.brokerId)
	await validateTicker(order.tickerId)
	await validateType(order.typeId)

	const orderData = {
		userId: user.id,
		...order,
		date: formatDate(order.date)
	}

	const createdOrder = await orderRepository.create(orderData)

	return createdOrder
}


const updateOrder = async (order: Order) => {
	const existentOrder = await validateOrder(order.id)
	validateUserOrder(order.userId, existentOrder.userId)
	await validateBroker(order.brokerId)
	await validateTicker(order.tickerId)
	await validateType(order.typeId)
	await userService.validateUserById(order.userId)

	const updatedOrder = await orderRepository.update({
		...order,
		date: formatDate(order.date)
	})

	return updatedOrder
}


const deleteOrder = async (orderId: number, userId: number) => {
	const order = await validateOrder(orderId)
	validateUserOrder(userId, order.userId)

	const deletedOrder = await orderRepository.deleteOne(orderId)

	return deletedOrder
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

const validateOrder = async (orderId: number) => {
	const order = await orderRepository.findById(orderId)
	if (!order) throw new NoOrderError(orderId)

	return order
}

const validateUserOrder = (userId: number, userOrderId: number) => {
	if (userId !== userOrderId) throw new DeleteOrderError(userId)
}


export {
	getOrders,
	makeCreateOrderInfo,
	makeOrdersIR,
	createOrder,
	updateOrder,
	deleteOrder,
}
