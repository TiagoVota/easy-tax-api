import Joi from 'joi'

import { UserData } from '../interfaces/userInterface.js'


const userSchema = Joi.object<UserData>({
	email: Joi.string().email().max(80).required(),
	password: Joi.string().min(5).required(),
}).length(2)


export {
	userSchema,
}
