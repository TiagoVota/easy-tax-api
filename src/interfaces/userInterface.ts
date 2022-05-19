import { User } from '@prisma/client'


type UserData = Omit<User, 'id'>
type AuthUserData = Omit<UserData, 'name'>
type TokenInfo = Omit<User, 'password'>


export { 
	User,
	UserData,
	AuthUserData,
	TokenInfo,
}
