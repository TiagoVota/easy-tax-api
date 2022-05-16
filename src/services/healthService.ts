import { HealthError } from '../errors/index.js'
import { healthRepository } from '../repositories/index.js'


const getHealth = async () => {
	await getHealthOrFail()

	const successMsg = 'I\'m alive!'

	return successMsg
}


const getHealthOrFail = async () => {
	const health = await healthRepository.findAll()
	if (!health) throw new HealthError()
}


export {
	getHealth,
}
