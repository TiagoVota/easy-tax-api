import { userRepository } from '../repositories/index.js'

import { encryptValue, isValidEncrypt } from '../utils/encryptor.js'
import { generateToken } from '../utils/authorizations.js'
import { formatTokenData } from './helpers/formatUserHelper.js'

import { AuthUserData, User, UserData } from '../interfaces/userInterface.js'

import {
	ExistentUserError,
	InvalidPasswordError,
	NoUserByIdError,
	NoUserError,
} from '../errors/index.js'


const createUser = async ({ name, email, password }: UserData) => {
	await validateExistentUser(email)

	const hashPassword = encryptValue(password)

	const user = await insertUser({
		name,
		email: email.toLowerCase(),
		password: hashPassword
	})
	
	return user
}


const AuthorizeUser = async ({ email, password }: AuthUserData) => {
	const user = await userRepository.findByEmail(email)

	validateUser(user, email)
	validatePassword(password, user.password)

	const token = generateToken(formatTokenData(user))

	return { token }
}


const validateExistentUser = async (email: string) => {
	const existentUserEmail = await userRepository.findByEmail(email)
	if (existentUserEmail) throw new ExistentUserError(email)
}

const insertUser = async (userData: UserData) => {
	const user = await userRepository.insert(userData)
	delete user.password

	return user
}

const validateUser = (user: User, email: string) => {
	const haveUser = Boolean(user?.id)
	if (!haveUser) throw new NoUserError(email)
}

const validatePassword = (password: string, hashPassword: string) => {
	const isValidPassword = isValidEncrypt(password, hashPassword)
	if (!isValidPassword) throw new InvalidPasswordError()
}

const validateUserById = async (userId: number) => {
	const user = await userRepository.findById(userId)
	if (!user) throw new NoUserByIdError(userId)

	return user
}


export {
	createUser,
	AuthorizeUser,
	validateUserById,
}
