// Remove smallest number of array and return a new array

//Parameters : Array of numbers
//Result: Array
//Example: [1,2,3] --> [2,3]

function removeSmallest(array) {  
  min = Math.min( ...array )
  index = array.indexOf( min )
  new_array = array.slice()
  new_array.splice(index,1)
  
  return new_array
}

console.log( removeSmallest([1,2,3]) )
