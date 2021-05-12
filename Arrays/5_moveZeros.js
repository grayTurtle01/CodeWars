// move Zeros to the end of the array

//Parameters : Array 
//Result: Array
//Example: [0,1,0,2,3] --> [1,2,3,0,0]

function moveZeros(array) {  
  zeros = array.filter( item => item === 0)
  new_array = array.filter( item => item !== 0)
  
  for( zero of zeros)
    new_array.push(0)
    
  return new_array
  
}

console.log( moveZeros([false,1,0,1,2,0,1,3,"a"]) )
