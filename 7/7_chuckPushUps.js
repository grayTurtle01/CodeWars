function chuckPushUps(string) {
  console.log(string)
   
  if( typeof(string) != 'string' || string == '')
    return 'FAIL!!'
  
  string = string.replace(/[^01 ]+/gi, "")

  binary_numbers = string.match(/[01]+/g)
  
  if( binary_numbers == null)
    return 'CHUCK SMASH!!'
  
  decimal_numbers = []
  for(number of binary_numbers){
    decimal_number = parseInt(number, 2)
    decimal_numbers.push(decimal_number)
  }
 
  max_number = Math.max(...decimal_numbers)
  
  return max_number
  
}
