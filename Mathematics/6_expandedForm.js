// write a number in expanded form

//Parameters : Number:Integer
//Result: String
//Example: 1234 --> '1000 + 200 + 30 + 4'
//                   1x10^3 + 2x10^2 + 2^10^1 + 4x10^0  
function expandedForm(num) {
  digits = String(num).split('')
  
  pow = digits.length-1
  
  r = ''
  for(digit of digits){
    console.log(pow)
    number = Number(digit)
    if(number == 0){
      pow--
      continue
    }
    
    if( pow == 0)
       r += number*10**pow
    else
      r += number*10**pow + ' + '
    pow--
  }
  
  if( r.slice(-1) == ' ')
    r = r.slice(0,-3)
  
  return r
}

console.log( expandedForm(900) )
