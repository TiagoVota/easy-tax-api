import { UnprocessableEntityError } from './httpErrors/index.js'


class SchemaError extends UnprocessableEntityError {
	constructor(message: string) {
		super(message)
		this.name = 'SchemaError'
		this.message = message
	}
}


export default SchemaError
