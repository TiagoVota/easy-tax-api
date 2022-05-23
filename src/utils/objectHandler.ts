const copyObject = (obj: object): object => {
	return JSON.parse(JSON.stringify(obj))
}


export {
	copyObject,
}
