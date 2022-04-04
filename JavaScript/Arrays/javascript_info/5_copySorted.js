// Copy and sort array

// Parameters: Array
// Result :  Array
// Example: [1,3,2] --> [1,2,3]

function copySorted(arr){
  new_array = arr.slice().sort( (a,b) => (a-b) )
  return new_array
}

console.log( copySorted([1,3,2]) )
