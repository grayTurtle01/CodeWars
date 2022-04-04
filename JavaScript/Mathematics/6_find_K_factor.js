// find k factor

//Parameters : Number(n), Number(p)
//Result: Number
//Example: 123,2 --> 1^2 * 2^3 * 3^⁴ = k*n | n ^ k integers

function digPow(n, p){
  digits = String(n).split('')
  sum = 0
  for( digit of digits){
    sum += digit ** p
    p++;
  }
    
  if( sum % n  == 0 )
    k = sum / n
  else
    k = -1
  
  return k
}

console.log( digPow(46288,3) )
