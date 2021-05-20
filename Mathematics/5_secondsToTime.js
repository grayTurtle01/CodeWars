// from seconds get the time in human format HH:MM:SS 

//Parameters : Number: positive Integer (seconds)  
//Result: String
//Example: 61 --> 00:01:01

function humanReadable(seconds) {
  minutes = Math.floor(seconds / 60 )
  seconds = seconds % 60
  
  hours = Math.floor( minutes / 60)
  minutes = minutes % 60;
  
  str_h = String(hours)
  if( str_h.length == 1 )
    str_h = '0'+str_h
    
  str_m = String(minutes)
  if( str_m.length == 1 )
    str_m = '0'+str_m
  
  str_s = String(seconds)
    if( str_s.length == 1 )
      str_s = '0'+str_s   
  
  result = str_h + ':' + str_m + ':' + str_s
  
  return result
}

humanReadable(359999)


console.log( )
