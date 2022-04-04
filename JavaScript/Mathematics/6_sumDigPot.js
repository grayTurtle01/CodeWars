// get the numbers between a range that fullfills the property

//Parameters : Array
//Result: Array 
//Example: [80, 10] --> [89]

function property(num){
  digits = String(num).split('')
  
  sum = 0
  pow = 1
  for( digit of digits){
    number = Number(digit)**pow
    sum += number
    pow++
  }
  
  if( num == sum)
    return true
  
  return false
  
}

function sumDigPow(a, b) {
  result = []
  for(num=a; num<=b; num++)
    if( property(num) )
      result.push(num)
      
  return result
}



console.log( sumDigPow(1,100) )
