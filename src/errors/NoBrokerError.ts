import { NotFoundError } from './httpErrors/index.js'


class NoBrokerError extends NotFoundError {
	constructor(brokerId: number) {
		super(`Broker not found with '${brokerId}' id!`)
		this.name = 'NoBrokerError'
	}
}


export default NoBrokerError
