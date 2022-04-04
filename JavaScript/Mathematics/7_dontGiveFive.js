// get the amount of numbers between a range, excluding multiples of five 

//Parameters : Number, Number
//Result: Number
//Example: 1,6 --> 1,2,3,4,6 --> 5

function dontGiveMeFive(start, end){
  array = []
  for(i=start; i <= end; i++){
    if( i >= 50 && i <= 59 )
      continue
    if( i % 10 == 0)
      array.push(i)
    else if( i % 5 != 0 )
      array.push(i)
  }
  return array.length;
}

console.log( dontGiveMeFive(1,90) )
