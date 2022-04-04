// get the century from year 

//Parameters : Number
//Result: Number
//Example: 1000 --> 10, 1001 --> 11

function century(year) {
  r = Math.ceil(year/100)
  
  return r;
}

console.log( century(1001) )
