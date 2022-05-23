import { UnauthorizedError } from './httpErrors/index.js'


class AuthError extends UnauthorizedError {
	constructor() {
		super('Invalid token!')
		this.name = 'AuthError'
	}
}


export default AuthError
