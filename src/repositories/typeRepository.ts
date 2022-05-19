import prisma from '../database/database.js'


const findAll = async () => {
	const types = await prisma.type.findMany()

	return types
}


const typeRepository = {
	findAll,
}
export {
	typeRepository
}
