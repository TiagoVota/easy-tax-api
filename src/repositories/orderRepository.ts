import prisma from '../database/database.js'

import { CreateOrderData } from '../interfaces/orderInterface.js'


const create = async (orderData: CreateOrderData) => {
	const order = await prisma.order.create({
		data: orderData
	})

	return order
}


const orderRepository = {
	create,
}
export {
	orderRepository
}
