// get the all divisors of a number 

//Parameters : Number
//Result: Array of Number
//Example: 12 --> [2,3,4,6]

function divisors(integer) {
  result = []
  for(i=2; i < integer-1; i++){
    if( integer % i == 0)
      result.push(i)
  }
  
  if( result.length == 0)
    return `${integer} is prime`
      
  return result
};

console.log( divisors(13) )
