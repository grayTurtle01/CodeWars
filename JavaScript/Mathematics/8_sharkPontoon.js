// scape from the shark

//Parameters : 
//Result: 
//Example: 

// v = d/t
// t = d / v

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  t1 = pontoonDistance / youSpeed;
  
  if( dolphin == true)
    sharkSpeed /= 2

  t2 = sharkDistance / sharkSpeed;
  
  if( t2 <= t1 )
    return "Shark Bait!"
    
  return "Alive!"

}

console.log( shark(24, 0, 4, 8, true) )
