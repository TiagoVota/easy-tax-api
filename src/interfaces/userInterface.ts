import { User } from '@prisma/client'


type UserData = Omit<User, 'id'>
type AuthUserData = Omit<UserData, 'name'>

interface UserInfo {
	userId: number
	email: string
}


export { 
	User,
	UserData,
	AuthUserData,
	UserInfo,
}
