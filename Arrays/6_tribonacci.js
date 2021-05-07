// Get Tribonacci Sequence 

//Parameters : Array of numbers(signature), Number (n elements) 
//Result: Array
//Example: [0,1,1],5 --> [0,1,1,2,4]

function tribonacci(signature, n) {
  if( n == 0 )
    return []
    
  result = []  
  if(n > 0 && n <= 3)
    for(i=0; i<n; i++)
      result.push( signature[i] )
  
  if( n > 3){
    result = [...signature ]
    for(i=1; i<=(n-3); i++ ){
      last_numbers = result.slice(-3)
      sum = last_numbers.reduce( (acc, num) => (acc+num))
      result.push(sum)
    }
  }
      
  return result
}

console.log( tribonacci([1,1,1],10) )
