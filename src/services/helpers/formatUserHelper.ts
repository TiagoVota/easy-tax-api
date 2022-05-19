import { User } from '../../interfaces/userInterface.js'


const formatTokenData = (user: User) => {
	const formatUserData = { ...user }
	delete formatUserData.password

	return formatUserData
}


export {
	formatTokenData,
}
