import prisma from '../database/database.js'

import { CreateOrderData } from '../interfaces/orderInterface.js'


const findByUser = async (id: number) => {
	const orders = await prisma.order.findMany({
		where: {
			user: {
				id,
			},
		},
		orderBy: {
			date: 'asc',
		},
		include: {
			broker: true,
			ticker: {
				include: {
					category: true,
					company: true,
				},
			},
			type: true,
		},
	})

	return orders
}


const findById = async (id: number) => {
	const order = await prisma.order.findUnique({
		where: {
			id,
		},
	})

	return order
}


const create = async (orderData: CreateOrderData) => {
	const order = await prisma.order.create({
		data: orderData
	})

	return order
}


const deleteOne = async (id: number) => {
	const deletedOrder = await prisma.order.delete({
		where: {
			id,
		},
	})

	return deletedOrder
}


const orderRepository = {
	findByUser,
	findById,
	create,
	deleteOne,
}
export {
	orderRepository
}
