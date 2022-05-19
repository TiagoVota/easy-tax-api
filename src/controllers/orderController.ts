import { NextFunction, Request, Response } from 'express'

import { orderService } from '../services/index.js'


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


export {
	getCreateOrderInfo,
}
