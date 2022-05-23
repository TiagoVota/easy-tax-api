const toBrazilianCurrency = (value: number) => {
	return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}


export {
	toBrazilianCurrency,
}
