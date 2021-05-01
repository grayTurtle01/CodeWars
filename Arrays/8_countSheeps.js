
function countSheeps(arrayOfSheep) {
  counter = 0
  arrayOfSheep.forEach( sheep => { if(sheep == true) counter++ } )
  
  return counter
}
