const formatCnpj = (cnpj: string) => {
	const noNumberRegex = /[^0-9]+/g
	const cnpjRegex = /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/
	
	const numberCnpj = cnpj.replace(noNumberRegex, '')
	const padNumber = numberCnpj.padStart(14, '0')
	return padNumber.replace(cnpjRegex, '$1.$2.$3/$4-$5')
}


export {
	formatCnpj,
}
