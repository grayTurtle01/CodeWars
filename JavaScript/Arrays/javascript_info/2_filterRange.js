// Filter a array of number by range

// Parameters: Array
// Result : Array
// Example: [1,2,3,5,6], 2,6 --> [2, 3, 5]

function filterRange(arr, a, b){
  new_array = []
  arr.forEach( num => {
    if( num >= a && num < b)
      new_array.push(num)
  })
  
  return new_array
}

/*** Second Solution ***/
function filterRange2(arr, a, b){
  new_array = arr.filter( num => (num >= a && num < b) )
  return new_array
}


console.log(filterRange2([1,2,3,5,6], 2,6 ))
