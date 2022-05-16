import { User } from '@prisma/client'


type UserData = Omit<User, 'id'>

interface UserInfo {
	userId: number
	email: string
}


export { 
	User,
	UserData,
	UserInfo,
}
