// determine if the array is sorted

//Parameters : Array of Numbers
//Result: Boolen
//Example: [1,2,3,4] --> True

function inAscOrder(arr) {
  for(i=0; i < arr.length-1; i++)
    if( arr[i] > arr[i+1] )
      return false
      
  return true
}


console.log( inAscOrder([1,2,3,4]) )
