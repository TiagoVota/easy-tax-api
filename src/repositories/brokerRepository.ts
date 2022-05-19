import prisma from '../database/database.js'


const findAll = async () => {
	const brokers = await prisma.broker.findMany()

	return brokers
}


const brokerRepository = {
	findAll,
}
export {
	brokerRepository
}
