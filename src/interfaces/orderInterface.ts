import { Order } from '@prisma/client'
import { TokenInfo } from './userInterface'


type CreateOrderData = Omit<Order, 'id'>
type BodyOrderData = Omit<Order, 'id' | 'userId'>

interface InsertOrderInfo {
	order: BodyOrderData
	user: TokenInfo
}


export {
	CreateOrderData,
	BodyOrderData,
	InsertOrderInfo,
}
