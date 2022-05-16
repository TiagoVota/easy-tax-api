import { jest } from '@jest/globals'


const clearMocks = () => {
	jest.clearAllMocks()
	jest.resetAllMocks()
}


export {
	clearMocks,
}
