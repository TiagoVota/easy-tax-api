import { NotFoundError } from './httpErrors/index.js'


class NoUserByIdError extends NotFoundError {
	constructor(userId: number) {
		super(`User not found with id '${userId}'!`)
		this.name = 'NoUserByIdError'
	}
}


export default NoUserByIdError
