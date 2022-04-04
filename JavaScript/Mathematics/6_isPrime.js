// determine is a number is a prime number

//Parameters : Number
//Result: Boolean
//Example: 13 --> true


function isPrime(num) {
  if( num <= 1)
    return false;
  
  for(i=2; i <= Math.sqr(num); i++)
    if( num % i == 0)
      return false
      
  return true
}


console.log( isPrime(13) )
