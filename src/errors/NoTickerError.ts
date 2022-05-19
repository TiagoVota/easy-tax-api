import { NotFoundError } from './httpErrors/index.js'


class NoTickerError extends NotFoundError {
	constructor(tickerId: number) {
		super(`User not found ticker with '${tickerId}' id!`)
		this.name = 'NoTickerError'
	}
}


export default NoTickerError

