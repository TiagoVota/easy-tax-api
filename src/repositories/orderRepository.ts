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


const create = async (orderData: CreateOrderData) => {
	const order = await prisma.order.create({
		data: orderData
	})

	return order
}


const orderRepository = {
	findByUser,
	create,
}
export {
	orderRepository
}
