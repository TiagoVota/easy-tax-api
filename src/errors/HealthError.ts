import { BadRequestError } from './httpErrors/index.js'


class HealthError extends BadRequestError {
	constructor() {
		super('I\'m not alive :(')
		this.name = 'HealthError'
	}
}


export default HealthError
