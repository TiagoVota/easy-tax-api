import jwt from 'jsonwebtoken'


const generateToken = (tokenInfo: object) => {
	const secretKey = process.env.JWT_SECRET
	const configurations = { expiresIn: '15 days' }
	const token = jwt.sign(tokenInfo, secretKey, configurations)

	return token
}


const verifyToken = (token: string) => {
	const secretKey = process.env.JWT_SECRET
	const payload = jwt.verify(token, secretKey)

	return payload
}


export {
	generateToken,
	verifyToken,
}
