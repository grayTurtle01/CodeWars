// get the primes numbers of a numbers 

//Parameters : Number
//Result: Array of primes
//Example: 100 --> [2,2,5,5]

function getAllPrimeFactors(n) { 
  if( n == 1)
    return [1]
  
  primes = []

  for(i=2; i <=n; i++){
    
    while( n % i == 0){
        primes.push(i)
        n = n/i
        
        if( n == 1 )
          break
    }
  }

  return primes
}

function getUniquePrimeFactorsWithCount(n) { 
 all_primes = getAllPrimeFactors(n)
 
 primes = []
 powers = []
 
 last_prime = primes[0]
 
 all_primes.forEach( prime => {
    if( primes.includes( prime) == false ){
      primes.push(prime)
      powers.push(1)
    }
    else{
      powers[powers.length - 1]++ 
    }
  })
 
 
 return [primes, powers]
}

function getUniquePrimeFactorsWithProducts(n) { 
  v = getUniquePrimeFactorsWithCount(n)
  primes = v[0]
  powers = v[1]
  
  
  result = []
  for(i=0; i < primes.length; i++)
    result[i] = primes[i]**powers[i]
  
  return result
}


n = 1

console.log( getAllPrimeFactors(n) )
console.log( getUniquePrimeFactorsWithCount(n) )
console.log( getUniquePrimeFactorsWithProducts(n) )
