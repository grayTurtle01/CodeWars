// get the prime Factors of a number 

//Parameters : Number
//Result: String
//Example: 100 --> (2**2)(5**2)

function primeFactors(n){
  factors = {}
  
  while( n > 1 ){
    for( i=2; i<=n; i++ ){
      if( n % i == 0 ){
        if( i in factors )
          factors[i]++
        else
          factors[i] = 1 
        n = n/i
        break
      }
    }
  }
  
  str_result = ''
  for( prime in factors){
    p = factors[prime]
    if( p == 1 )
      factor = `(${prime})`
    else
      factor = `(${prime}**${p})`
    
    str_result += factor
    
  }    
    
  return str_result
}

console.log( primeFactors(86240) )
