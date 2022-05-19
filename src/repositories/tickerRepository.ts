import prisma from '../database/database.js'


const findAll = async () => {
	const tickers = await prisma.ticker.findMany()

	return tickers
}


const findById = async (id: number) => {	
	const ticker = await prisma.ticker.findUnique({
		where: {
			id,
		},
	})

	return ticker
}


const tickerRepository = {
	findAll,
	findById,
}
export {
	tickerRepository
}
