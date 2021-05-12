// get the survivor of the circular array

//Parameters : Array
//Result: Array
//Example: [1,2,3,4,5,6,7],3 -> [4]

function josephusSurvivor(n,k){
  array = []
  for(i=1; i <= n; i++)
    array.push(i)
  
  if( k > n)
    index = ((k-1) % n) 
  else
    index = k-1  
    
  console.log(array, index)
  while( array.length > 1){
    array.splice(index, 1)
    index += k -1
    
    if( index >= array.length )
      index =  index % array.length 
     
    console.log(array, index)
  }
  
  return array[0]
}

console.log(josephusSurvivor(100,1))

