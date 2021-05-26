// sum all the digit of a number 

//Parameters : Number
//Result: Number
//Example: 123 --> 6

function sumDigits(number) {
  digits = String(number).split('')
  
  sum = 0
  
  for( digit of digits ){
    if( /[0-9]/.test(digit) )
      sum += Number(digit)
  }
  
  return sum
}


console.log( sumDigits(-123))
