import { NotFoundError } from './httpErrors/index.js'


class NoTypeError extends NotFoundError {
	constructor(typeId: number) {
		super(`Type not found with '${typeId}' id!`)
		this.name = 'NoTypeError'
	}
}


export default NoTypeError
