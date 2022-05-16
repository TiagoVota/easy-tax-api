import { NextFunction, Request, Response } from 'express'

import { healthService } from '../services/index.js'


async function checkHealth(req: Request, res: Response, next: NextFunction) {
	try {
		const healthMsg = await healthService.getHealth()
		
		return res.status(200).send(healthMsg)

	} catch (error) {
		next(error)
	}

}


export {
	checkHealth,
}
