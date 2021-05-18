// get the sum of all multiples of 3 or 5 on a range

//Parameters : Number
//Result: Number
//Example: 10, --> [3,5,6,9] --> 23

function solution(number){
  sum = 0;
  for(i=2; i < number; i++)
    if( i%3 == 0 || i%5 == 0)
      sum += i
      
  return sum
}

console.log( solution(-1) )
