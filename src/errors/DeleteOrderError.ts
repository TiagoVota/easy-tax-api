import { UnauthorizedError } from './httpErrors/index.js'


class DeleteOrderError extends UnauthorizedError {
	constructor(userId: number) {
		super(`User with id '${userId}' has no permission to delete this order!`)
		this.name = 'DeleteOrderError'
	}
}


export default DeleteOrderError
