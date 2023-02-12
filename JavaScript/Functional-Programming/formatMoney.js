//~ function formatMoney(amount){
	//~ parts = String(amount).split('.')

	//~ dollars = parts[0]
	//~ cents = parts[1] == undefined? '00' : parts[1]

	//~ cents = cents.padEnd(2, '0')

	//~ return `$${dollars}.${cents}`
	
//~ }


const formatMoney = (amount) => `$${amount.toFixed(2)}`

console.log(formatMoney(3))
