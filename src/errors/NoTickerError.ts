import { NotFoundError } from './httpErrors/index.js'


class NoTickerError extends NotFoundError {
	constructor(tickerId: number) {
		super(`Ticker not found with '${tickerId}' id!`)
		this.name = 'NoTickerError'
	}
}


export default NoTickerError
