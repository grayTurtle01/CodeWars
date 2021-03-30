function persistence(num) {
  
   num_digits = String(num).split("").length
   if( num_digits == 1)
    return 0
   
   iterations = 0; 
   do{
      product = multiplyDigits(num)
      num_digits = String(product).split("").length
      iterations++
      num = product
   }while( num_digits > 1); 
   
  return iterations
}

function multiplyDigits(num){
  num_str = String(num)
   digits_str_array = num_str.split('')
   
   console.log(digits_str_array)
   
   digits = []
   digits_str_array.forEach( digit_str => {
     digit = Number(digit_str)
     digits.push( digit )
   })
  
   product = 1
   digits.forEach( (digit) => (product *= digit) )
   
   return product
}
//console.log( multiplyDigits(4) )
console.log(persistence(3))
