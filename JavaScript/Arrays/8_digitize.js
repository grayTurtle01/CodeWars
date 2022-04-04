// From a number Get an array of digits reversed

//Parameters : Number
//Result: Array of numbers
//Example: 123 --> [3, 2, 1]

function digitize(n) {
  str_number = String(n)
  array_digits_str = str_number.split('')
  array_digits = array_digits_str.map(Number)
  
  result = array_digits.reverse()
  
  return result
}

console.log(digitize(123))
