import Joi from 'joi'

import { AuthUserData, UserData } from '../interfaces/userInterface.js'


const userSchema = Joi.object<UserData>({
	name: Joi.string().min(2).max(80).required(),
	email: Joi.string().email().max(80).required(),
	password: Joi.string().min(5).max(80).required(),
}).length(3)

const loginSchema = Joi.object<AuthUserData>({
	email: Joi.string().email().max(80).required(),
	password: Joi.string().min(5).max(80).required(),
}).length(2)


export {
	userSchema,
	loginSchema,
}
