// From an array get the sum of positve and negative numbers

//Parameters : Array
//Result: Array 
//Example: [1,2,-1,-2]--> [3,-3]

function countPositivesSumNegatives(input) {
  if(  !input  )
    return []
    
  if(input.length == 0 )
    return []
  
    pos = 0
    neg = 0
    input.forEach( num => {
        if( num > 0 )
          pos++
        else
          neg += num
    })
    
    return [pos, neg]
}
console.log( countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]) )
