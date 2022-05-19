import { Router } from 'express'

import * as schemaValidation from '../middlewares/schemaValidation/index.js'

import { orderController } from '../controllers/index.js'


const orderRouter = Router()

orderRouter.get(
	'/buy-info',
	orderController.getCreateOrderInfo
)


export default orderRouter
