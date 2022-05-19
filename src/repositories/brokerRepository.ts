import prisma from '../database/database.js'


const findAll = async () => {
	const brokers = await prisma.broker.findMany()

	return brokers
}


const findById = async (id: number) => {	
	const broker = await prisma.broker.findUnique({
		where: {
			id,
		},
	})

	return broker
}


const brokerRepository = {
	findAll,
	findById,
}
export {
	brokerRepository
}
