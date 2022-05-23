import { Company } from '@prisma/client'


type CompanyInsertData = Omit<Company, 'id'>


export {
	Company,
	CompanyInsertData,
}
