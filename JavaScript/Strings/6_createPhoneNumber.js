function createPhoneNumber(numbers){
  str_numbers = numbers.join("")
  
  r = str_numbers.replace(/([0-9]{3})(\d{3})(\d{4})/, "($1) $2-$3")
  return r 
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
