// square every digits and concatenated them

//Parameters : Number
//Result: Number
//Example: 123 --> 149

function squareDigits(num){
  //may the code be with you
  squares = ''
  digits = String(num).split('')
  for(digit of digits){
    square = digit**2
    squares += square
  }
  
  return Number(squares)
}

console.log( squareDigits(123) )
