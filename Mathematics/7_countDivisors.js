// count the number of divisor of a number

//Parameters : Number:Integer
//Result: Number:Integer
//Example: 10 --> 1,2,5,10 --> 4
//         54 --> 1,2, 

function getDivisorsCnt(n){

  counter = 0

  for(i=1; i <=n; i++){
    if( n % i == 0){
      counter++
    }
  }
    
  return counter
}

console.log( getDivisorsCnt(1) )
