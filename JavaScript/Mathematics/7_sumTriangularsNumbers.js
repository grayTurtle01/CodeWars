// obtain the sum the n-th triangulars numbers

//Parameters : Number:integer(n)
//Result: Number:Integer
//Example: 4 --> 1 + 3 + 6 + 10 --> 20

function sumTriangularNumbers(n) {
  sum = 0
  for(i=1; i<=n; i++)
    sum += getNtringularNumber(i)
    
  return sum
}

function getNtringularNumber(n){
  return n*(n+1)/2
}


console.log( sumTriangularNumbers(4) )
