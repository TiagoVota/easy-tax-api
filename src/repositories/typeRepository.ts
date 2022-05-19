import prisma from '../database/database.js'


const findAll = async () => {
	const types = await prisma.type.findMany()

	return types
}


const findById = async (id: number) => {	
	const type = await prisma.type.findUnique({
		where: {
			id,
		},
	})

	return type
}


const typeRepository = {
	findAll,
	findById,
}
export {
	typeRepository
}
