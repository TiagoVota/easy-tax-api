import prisma from '../database/database.js'

import { UserData } from '../interfaces/userInterface.js'


const findByEmail = async (email: string) => {
	const user = await prisma.user.findUnique({
		where: {
			email,
		},
	})

	return user
}


const findById = async (id: number) => {
	const user = await prisma.user.findUnique({
		where: {
			id,
		},
	})

	return user
}


const insert = async (userData: UserData) => {
	const user = await prisma.user.create({
		data: userData
	})

	return user
}


const userRepository = {
	findByEmail,
	findById,
	insert,
}
export {
	userRepository
}
