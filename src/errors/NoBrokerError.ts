import { NotFoundError } from './httpErrors/index.js'


class NoBrokerError extends NotFoundError {
	constructor(brokerId: number) {
		super(`User not found broker with '${brokerId}' id!`)
		this.name = 'NoBrokerError'
	}
}


export default NoBrokerError

