import { Router } from 'express'

import * as schemaValidation from '../middlewares/schemaValidation/index.js'

import { authController } from '../controllers/index.js'

import { userSchema, loginSchema } from '../schemas/userSchema.js'


const authRouter = Router()

authRouter.post(
	'/login',
	schemaValidation.bodyMiddleware(loginSchema),
	authController.loginUser
)
authRouter.post(
	'/sign-up',
	schemaValidation.bodyMiddleware(userSchema),
	authController.signUpUser
)


export default authRouter
