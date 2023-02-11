function multiplyAll(array) {
	return function(a){
		return array.map(x => a*x)
	}
}


//~ const multiplyAll = (array) => (a) => array.map( x => a*x)


console.log(multiplyAll([1,2,3,4,5])(2))
