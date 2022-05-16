import prisma from '../database/database.js'


const findAll = async () => {
	const health = await prisma.health.findMany()

	return health
}


const healthRepository = {
	findAll,
}
export {
	healthRepository
}
