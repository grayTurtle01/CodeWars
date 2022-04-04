// determine if the clerk can sell all the tickets 

//Parameters : Array
//Result: String
//Example: [25, 25, 50] --> TRUE

function tickets(peopleInLine){
  count = {
    '25': 0,
    '50': 0,
    '100': 0
  }
  
  for( client of peopleInLine ){
    if (client == 25)
      count['25']++;
    else if( client == 50)
      if( count['25'] == 0 )
        return 'NO'
      else{
        count['25']--
        count['50']++
      }
    else if( client == 100)
      if( count['25'] == 0)
        return 'NO'
      else if ( count['50'] == 0  && count['25'] < 3 )
        return 'NO'
      else if( count['50'] > 0){
          count['50']--
          count['25']--
          count['100']++
      }
      else if ( count['50'] == 0  && count['25'] > 2 ){
        count['25'] -= 3;
        count['100']++
      }
            
  }     
  
  return 'YES'
  
}


console.log( tickets([25,25,25, 100]) )
