import { Router } from 'express'

import healthRouter from './healthRouter.js'
import authRouter from './authRouter.js'


const router = Router()

router.use('/health', healthRouter)
router.use('/auth', authRouter)


export default router
