import { UnauthorizedError } from './httpErrors/index.js'


class InvalidPasswordError extends UnauthorizedError {
	constructor() {
		super('Invalid user password!')
		this.name = 'InvalidPasswordError'
	}
}


export default InvalidPasswordError
