import { Prisma } from '@prisma/client'

import prisma from '../src/database/database.js'

import { CategoryName } from '../src/interfaces/categoryInterface.js'
import { CompanyInsertData } from '../src/interfaces/companyInterface.js'
import { TypeName } from '../src/interfaces/typeInterface.js'

import brokerList from './utils/brokerList.js'
import stockCompanyList from './utils/stockCompanyList.js'
import stockTickerList from './utils/stockTickerList.js'


const emptyDatabase = async () => {
	const tables = Prisma.dmmf.datamodel.models.map(model => {
		return model.dbName || model.name
	})

	const deletePromises = tables.map(table => {
		return prisma.$executeRawUnsafe(`TRUNCATE TABLE "${table}" CASCADE;`)
	})

	return Promise.all(deletePromises)
}

const main = async () => {
	// Clear db
	await emptyDatabase()

	// Upsert categories, types, companies, brokers
	const categoryList = [
		'Stock',
		'FII',
		'BDR',
		'ETF',
	] as CategoryName[]
	const typeList = [
		'buy',
		'sell',
	] as TypeName[]
	const companyList = [
		...stockCompanyList,
	] as CompanyInsertData[]

	const categoryPromises = categoryList.map(name => {
		const promise = prisma.category.upsert({
			where: {
				name,
			},
			update: {},
			create: {
				name,
			},
		})

		return promise
	})
	const typePromises = typeList.map(name => {
		const promise = prisma.type.upsert({
			where: {
				name,
			},
			update: {},
			create: {
				name,
			},
		})

		return promise
	})
	const companyPromises = companyList.map(company => {
		const promise = prisma.company.upsert({
			where: {
				name: company.name,
			},
			update: {},
			create: company,
		})

		return promise
	})
	const brokerPromises = brokerList.map(broker => {
		const promise = prisma.broker.upsert({
			where: {
				cnpj: broker.cnpj,
			},
			update: {},
			create: broker,
		})

		return promise
	})

	await Promise.all([
		...categoryPromises,
		...typePromises,
		...companyPromises,
		...brokerPromises,
	])


	// Upsert tickers
	const categories = await prisma.category.findMany()
	const stockCategory = categories.find(category => {
		return category.name === categoryList[0]
	})
	const stockCategoryId = stockCategory.id

	const companies = await prisma.company.findMany()
	
	const stockPromises = []
	stockTickerList.forEach(tickerInfo => {
		const tickerCompany = companies.find(company => {
			return company.cnpj === tickerInfo.cnpj
		})
		
		tickerInfo.tickers.forEach(ticker => {
			const promise = prisma.ticker.upsert({
				where: {
					name: ticker,
				},
				update: {},
				create: {
					name: ticker,
					categoryId: stockCategoryId,
					companyId: tickerCompany.id
				},
			})

			stockPromises.push(promise)
		})
	})

	await Promise.all(stockPromises)
}


main()
	.catch((error) => {
		console.log(error)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
