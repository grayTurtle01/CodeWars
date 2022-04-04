// get the point per game if the player plays 48 minutes

//Parameters : Number(ppg), Number(mpg)
//Result: Number(ppg48)
//Example: 10,12 --> 40

// ppg --- mgg
//  x  --- 48
function pointsPer48(ppg, mpg) {
  if( mpg == 0)
    return 0
  
  ppg48 = ppg * 48 / mpg
  if(  Number.isInteger(ppg48) )
    return ppg48
  
  return Number(ppg48.toFixed(1))
}


console.log( pointsPer48(5,17) )
