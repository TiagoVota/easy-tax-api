import prisma from '../../src/database/database'


const disconnectServer = async () => {
	await prisma.$disconnect()
}


const truncateHealth = async () => {
	await prisma.$executeRaw`TRUNCATE TABLE health;`
}


export {
	disconnectServer,
	truncateHealth,
}
