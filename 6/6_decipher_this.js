function decipherThis(str) {
  
  decipherText = ""
  
  words = str.split(" ")
  
  words.forEach( word => {
    wordDecipher = decipherWord(word)
    decipherText += wordDecipher + " "
  })
  
  //console.log(decipherText)
  decipherText = decipherText.trim()
  return decipherText
}; 

function decipherWord(str){
  //get the number
  number_str = ""
  for(c of str)
    if( c >= '0' && c <= '9'  )
      number_str += c
    else
      break
  
  //number to leeter
  //~ console.log(number_str)
  number = Number(number_str)
  //~ console.log(number)
  //console.log(String.fromCharCode(number))
  first_leter = String.fromCharCode(number)
  //console.log(first_leter)
  
  //get leters
  only_letters = str.slice(number_str.length)
  //console.log(only_letters)
  
  //change the second and the last character
  array = only_letters.split("")
  tmp = array[0]
  array[0] = array[array.length-1]
  array[array.length-1] = tmp
  //console.log(array)
  only_letters = array.join("")
  //console.log(only_letters)
  
  word_decipher = first_leter + only_letters
  //console.log(word_decipher)
  
  return word_decipher
  //Change the number for ascii letter
}

decipherThis('72olle 103doo 100ya')
//decipherWord('72olle')
