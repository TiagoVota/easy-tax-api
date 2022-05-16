import { NextFunction, Request, Response } from 'express'

import { verifyToken } from '../utils/authorizations.js'

import { UserInfo } from '../interfaces/userInterface.js'

import { AuthError } from '../errors/index.js'


const authMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const authorization = req.headers['authorization']
	const token = authorization?.replace('Bearer ', '')

	try {
		if (!token) throw new AuthError()

		const user = verifyToken(token) as UserInfo
		if (!user) throw new AuthError()
	
		res.locals.user = user

		next()

	} catch (error) {
		next(error)
	}
}


export default authMiddleware
