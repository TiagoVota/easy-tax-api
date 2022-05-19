import Joi from 'joi'

import { BodyOrderData } from '../interfaces/orderInterface.js'


const orderSchema = Joi.object<BodyOrderData>({
	tickerId: Joi.number().integer().min(0).required(),
	typeId: Joi.number().integer().min(0).required(),
	price: Joi.number().integer().min(1).required(),
	quantity: Joi.number().integer().min(1).required(),
	brokerId: Joi.number().integer().min(0).required(),
	date: Joi.date().required(),
}).length(6)


export {
	orderSchema,
}
