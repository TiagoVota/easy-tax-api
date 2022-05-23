import { NextFunction, Request, Response } from 'express'

import { orderService } from '../services/index.js'

import { TokenInfo } from '../interfaces/userInterface.js'
import { BodyOrderData } from '../interfaces/orderInterface.js'


const getUserOrders = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const user = res.locals.user as TokenInfo

	try {
		const createOrderInfo = await orderService.getOrders(user.id)

		return res.status(200).send(createOrderInfo)

	} catch (error) {
		next(error)
	}
}


const getCreateOrderInfo = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const createOrderInfo = await orderService.makeCreateOrderInfo()

		return res.status(200).send(createOrderInfo)

	} catch (error) {
		next(error)
	}
}


const createOrder = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const user = res.locals.user as TokenInfo
	const order = req.body as BodyOrderData

	try {
		const createdOrder = await orderService.createOrder({ user, order })

		return res.status(201).send(createdOrder)

	} catch (error) {
		next(error)
	}
}


export {
	getUserOrders,
	getCreateOrderInfo,
	createOrder,
}
