import { UnauthorizedError } from './httpErrors/index.js'


class ChangeOrderError extends UnauthorizedError {
	constructor(userId: number) {
		super(`User with id '${userId}' has no permission to change this order!`)
		this.name = 'ChangeOrderError'
	}
}


export default ChangeOrderError
