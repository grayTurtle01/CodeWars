function Xbonacci(signature,n){
  
  size_sum = signature.length
  iterations = n - size_sum
  
  
  if( size_sum > n){
    array = signature.slice(0, n)
    return array
  }
  
  if( n == 0)
    return []
  
  sum = 0
  array = signature
  
  for(i = 0; i < iterations; i++){
    for(j = i; j < (i + size_sum); j++ )
      sum += array[j]
    
    array.push(sum)
    sum = 0
  }
   
  return array
}

