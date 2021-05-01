// Get the sum of the positive numbers

//Parmeters: Array of Number
//Result: Number
//Example: [1,2,3,-1] --> 6
 
function positiveSum(arr) {
  sum = 0
  arr.forEach(number => {
    if( number > 0 )
      sum += number
  })
  
  return sum
}
