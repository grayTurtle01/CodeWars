// Sort in decresing order

// Parameters: Array
// Result : Array
// Example: [1,2,3] --> [3,2,1]

function sortDecresing(arr){
  
  return arr.sort( (a,b) => (b-a) )
  
}

console.log( sortDecresing([1,2,3]) )

