// get the index of the array, when the sum of the left side is equal of the right side

//Parameters : Array of numbers
//Result: Number (index)
//Example: [1,2,3,1,3,2,1] --> 3

function findEvenIndex(array) {  
    
  for(i=0; i < array.length; i++){
    left = array.slice(0,i)
    right = array.slice(i+1)
    
    sum_left = left.reduce( (acc,num) => (acc + num), 0)
    sum_right = right.reduce( (acc,num) => (acc + num), 0)
    
    if( sum_left == sum_right )
      return i
  }
  
  return -1
  
}

console.log( findEvenIndex([20,10,-80,10,10,15,35] ) )
