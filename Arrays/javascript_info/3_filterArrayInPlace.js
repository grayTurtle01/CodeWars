// Filter by range Array in-place

// Parameters: Array
// Result : Array
// Example: [1,2,3,4,5], 1,5 -> [1,2,3,4]

function filterArrayInPlace(arr, a, b){
  
  for(i=0; i < arr.length; i++ ){
    num = arr[i]
    if( num < a || num >= b ){
      arr.splice(i, 1)
      i--;
    }
  }
  
  return arr
}

console.log(filterArrayInPlace([1,2,3,4,5], 2,4 ))
