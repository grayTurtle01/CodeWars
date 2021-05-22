// get the sum of all squares perimeters of a visual fibonacci representation

//Parameters : Number:Int (n)
//Result: Number:Int (sum)
//Example: 8 -->  4 * 20 = 80

// fibonacci : 1 1 2 3 5 8 13 21 34 

function perimeter(n) {
   serie = fibonacci_serie(n+1)
   perim = serie.reduce( (acc, num) => (acc + 4*num ),0)
   return perim
}

function fibonacci_serie( n ){
  pen =  1
  last = 1
  
  serie = [1, 1]
  
  if( n == 1)
    return [1]
  
  if(n == 2)
    return serie
    
  else
    for(i=3; i <= n; i++){
      r = pen + last
      serie.push(r)
      
      pen = last
      last = r
    }
  
  return serie
}

console.log( fibonacci_serie(6) )
console.log( perimeter(0) )
