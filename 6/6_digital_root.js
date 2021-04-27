function digital_root(n) {
  str_number = String(n)
  digits = str_number.split('')
  
  do{
    sum = 0
    digits.forEach( digit => sum += Number(digit) )
    digits = String(sum).split('')
    
  }while( String(sum).length > 1 )
  
  return sum
 
}
