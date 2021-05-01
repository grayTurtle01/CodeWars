// Get the sum of the 2 lowest numbers

//Parameters : Array of numbers
//Result: Number
//Example: [1,2,3] --> 3

function sumTwoSmallestNumbers(numbers) {  
  
  min1 = Math.min( ...numbers )
  index = numbers.indexOf( min1 )
  numbers.splice(index, 1)
  
  min2 = Math.min( ...numbers )
  
  return min1 + min2
  
}

sumTwoSmallestNumbers([1,2,3])
