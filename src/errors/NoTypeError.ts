import { NotFoundError } from './httpErrors/index.js'


class NoTypeError extends NotFoundError {
	constructor(typeId: number) {
		super(`User not found type with '${typeId}' id!`)
		this.name = 'NoTypeError'
	}
}


export default NoTypeError

