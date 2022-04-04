function lifePathNumber(dateOfBirth) {
  
  lifenum = "0"
  
  numbers = dateOfBirth.split("-")
  sum_numbers = numbers.reduce( (acc, number) => (acc + Number( numberToDigit(number) ) ), 0)
  //console.log(sum_numbers)
  
  lifenum = numberToDigit(String(sum_numbers))
  //console.log(lifenum)
  
  return lifenum;
}

function numberToDigit(number_str){
  
  while( number_str.length > 1){
    digits = number_str.split("")
    new_number = digits.reduce( (acc, digit) => acc + Number(digit), 0 )
    number_str = String(new_number)
 } 
 
 return number_str

}


//console.log(numberToDigit("55"))

//~ lifePathNumber('1986-04-07')
lifePathNumber('1879-03-14')
