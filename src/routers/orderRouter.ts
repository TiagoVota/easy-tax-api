import { Router } from 'express'

import * as schemaValidation from '../middlewares/schemaValidation/index.js'

import { orderController } from '../controllers/index.js'

import { orderSchema, orderIdSchema } from '../schemas/orderSchema.js'


const orderRouter = Router()

orderRouter.get(
	'/',
	orderController.getUserOrders
)
orderRouter.get(
	'/buy-info',
	orderController.getCreateOrderInfo
)
orderRouter.get(
	'/view-ir',
	orderController.getOrdersIR
)

orderRouter.post(
	'/',
	schemaValidation.bodyMiddleware(orderSchema),
	orderController.createOrder
)

// orderRouter.put(
// 	'/:orderId',
// 	schemaValidation.bodyMiddleware(orderSchema),
// 	orderController.createOrder
// )

orderRouter.delete(
	'/:orderId',
	schemaValidation.paramsMiddleware(orderIdSchema),
	orderController.removeOrder
)


export default orderRouter
