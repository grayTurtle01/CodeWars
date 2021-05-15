// get the number of litres consumed per hour 

//Parameters : Number
//Result: Number
//Example: 2 --> 1,  3 ---> 1

function litres(time) {
  return Math.floor(time * 0.5);
}
console.log( litres(4) )
