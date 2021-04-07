function high(x){
  
  high_obj = {
    word : "",
    value: 0
  }
  
  words = x.split(" ")
  words.forEach( word => {
    value = getWordValue(word)
    if( value > high_obj.value ){
        high_obj.value = value
        high_obj.word = word
    }
  })
  //console.log(high_obj.word)
  return high_obj.word
}

function getWordValue( word ){
  total_value = 0
  for(c of word ){
    ascii_value = c.charCodeAt()
    value = ascii_value - 96
    total_value += value
  }
  return total_value
}


