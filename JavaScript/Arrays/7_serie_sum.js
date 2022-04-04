// Get the sum of the serie : 1/1 + 1/4 + 1/7 + ...  

//Parameters : Number n
//Result: String 
//Example: 2 --> '1.25'

function SeriesSum(n) {  
  sum = 0
  den = 1
  for(i=1; i <= n; i++){
    num = 1/den
    sum += num
    den += 3
  }
  return sum.toFixed(2)
}

console.log( SeriesSum(5) )
