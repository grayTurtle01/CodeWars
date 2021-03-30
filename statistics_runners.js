function stat(strg) {
  
  if( strg == "")
    return ""
  
  if( typeof(strg) == "string" ){
  
    range = getRange(strg)
    //~ console.log(range)
    avg = getAverage(strg)
    //~ console.log(avg)
    
    strg_sort = sortTimes( strg )
    //~ console.log( strg_sort, typeof(strg_sort) )
    
    median = getMedian( strg_sort )
    //~ console.log(median)
    
    result = `Range: ${range} Average: ${avg} Median: ${median}`
    //console.log(result)
    return result
  }
  else
    return ""
}

//~ stat("01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17")
//~ stat("01|15|59, 1|47|6, 1|32|34, 2|3|17")
//~ stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41")
//~ stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17")

function getTimeParameters( str_times ){
    //console.log( str_times )
    times = str_times.split(", ")
    
    hours = 0
    total_minutes = 0
    total_seconds = 0
    
    times.forEach( time => {
      chonks = time.split("|")
      //console.log(chonks)
      
      hours += Number(chonks[0])
      total_minutes += Number(chonks[1])
      total_seconds += Number(chonks[2])
    })
    
    return [hours, total_minutes, total_seconds, times.length]
      
}

function mergeOneTime(hours, total_minutes, total_seconds){
  
  //seconds
  seconds = total_seconds % 60
  new_minutes = Math.floor(total_seconds / 60);
  //console.log(hours,new_minutes,seconds)
  
  //minutes
  total_minutes += new_minutes
  minutes = total_minutes % 60;
  new_hours = Math.floor( total_minutes / 60);
  //console.log(new_hours, total_minutes, minutes)
  
  //hours
  hours += new_hours
  console.log(hours, minutes, seconds)
  
  //~ //average
  //~ avg_hours = hours/times.length
  //~ avg_minutes = minutes/times.length
  //~ avg_seconds = seconds/times.length
  
  //~ console.log(avg_hours, avg_minutes, avg_seconds)
  
}

function allToSeconds(hours, total_minutes, total_seconds){
  seconds = total_seconds + total_minutes*60 + hours*60*60
  return seconds
}

function secondsToTime( all_seconds ){
  
  seconds = all_seconds % 60
  all_minutes = Math.floor(all_seconds / 60)
  minutes = all_minutes % 60
  hours = Math.floor(all_minutes / 60)
  
  //console.log( [hours, minutes, seconds] )
  hours = String(hours)
  minutes = String(minutes)
  seconds = String(seconds)
  
  if( hours.length == 1)
    hours = "0"+hours
  
  if( minutes.length == 1)
    minutes = "0"+minutes
  
  if( seconds.length == 1)
    seconds = "0"+seconds
  
  return hours +"|"+ minutes +"|"+ seconds
}

function getAverage(str){
  
  [hours, total_minutes, total_seconds, length] = getTimeParameters( str ) 
  
  seconds = allToSeconds( hours, total_minutes, total_seconds )
  avg_seconds = Math.floor(seconds/length)
  //console.log(avg_seconds)
  str_avg = secondsToTime( avg_seconds )
  //console.log(str_avg)
  return str_avg;
}

function getRange( str ){
  times = str.split(", ")
  
  low_seconds = 100000;
  hight_seconds = 0;
  
  times.forEach( time => {
      chonks = time.split("|")
      //console.log(chonks)
      
      hours = Number(chonks[0])
      minutes = Number(chonks[1])
      seconds = Number(chonks[2])
      
      total_seconds = allToSeconds(hours, minutes, seconds)
      //console.log( total_seconds )
      if( total_seconds < low_seconds)
        low_seconds = total_seconds
        
      if( total_seconds > hight_seconds)
        hight_seconds = total_seconds;
    })
  
    //console.log( low_seconds, hight_seconds )
    dx_seconds = hight_seconds - low_seconds
  
    str_range = secondsToTime( dx_seconds )
    //console.log(str_range)
    return str_range
}

function getMedian( strg_sort ){
  
  times = strg_sort.split(", ")
  
  if( (times.length % 2) == 1){
    index = Math.floor(times.length/2)
    time = times[index]
    //console.log(time)
    return time
  }
  else{
    index1 = Math.floor(times.length/2)
    index2 = index1 - 1;
    
    time1 = times[index1]
    time2 = times[index2]
    
    new_strg = time1 + ", " + time2
    
    //~ console.log(time1, time2)
    //~ console.log(new_strg, typeof(new_strg) )
   
    v = getTimeParameters( new_strg )
    hours = v[0]
    total_minutes = v[1]
    total_seconds = v[2]
    length = v[3]
    //console.log(length)
    
    str_median = getAverage( new_strg )
    return str_median
    
  }
  
}

function sortTimes( str ){
  times = str.split(", ")
  
  times_seconds = []
  
  times.forEach( time => {
    [hours, total_minutes, total_seconds, length] = getTimeParameters( time )
    seconds = allToSeconds( hours, total_minutes, total_seconds)
    times_seconds.push( seconds ) 
  })
  //console.log( times_seconds )
  
  times_seconds = times_seconds.sort( (a,b) => (a-b) ) 
  //console.log( times_seconds)
  times_sort = times_seconds.map( time => secondsToTime(time) )
  //console.log( times_sort )
  strg_sort = times_sort.join(", ")
  //console.log( strg_sort )
  return strg_sort
}
