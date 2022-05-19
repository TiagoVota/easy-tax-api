import { Broker } from '@prisma/client'


type BrokerInsertData = Omit<Broker, 'id'>


export {
	Broker,
	BrokerInsertData,
}
