import { Router } from 'express'

import { healthController } from '../controllers/index.js'


const healthRouter = Router()

healthRouter.get('', healthController.checkHealth)


export default healthRouter
