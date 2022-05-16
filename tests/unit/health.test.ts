import { jest } from '@jest/globals'

import { healthService } from '../../src/services/index.js'

import { healthRepository } from '../../src/repositories/index.js'

import { clearMocks } from '../factories/jestUtilsFactory.js'

import { HealthError } from '../../src/errors/index.js'


const sut = healthService

describe('healthService: getHealth', () => {
	beforeEach(clearMocks)
	
	it('should throw bad request error', async () => {
		jest.spyOn(healthRepository, 'findAll')
			.mockReturnValue(null)
		
		const result = sut.getHealth()
		await expect(result).rejects.toThrowError(HealthError)
	})
})
