import prisma from '../database/database.js'


const findAll = async () => {
	const tickers = await prisma.ticker.findMany()

	return tickers
}


const tickerRepository = {
	findAll,
}
export {
	tickerRepository
}
