import { NotFoundError } from './httpErrors/index.js'


class NoOrderError extends NotFoundError {
	constructor(orderId: number) {
		super(`Order not found with '${orderId}' id!`)
		this.name = 'NoOrderError'
	}
}


export default NoOrderError
