function longest(s1, s2) {
  all_letters = createLettersArray()
  
  str_result = ""
  all_letters.forEach( letter => {
    if( s1.search(letter) != -1 || s2.search(letter) != -1)
      str_result += letter
      console.log(str_result)
  })
  
  return str_result
}

function createLettersArray(){
  let array = []
  for(let i = 97; i < 97+26; i++ ){
    let c = String.fromCharCode(i)
    array.push( c )
  }
  return array
}

console.log( longest("xyaabbbccccdefww", "xxxxyyyyabklmopq") )
//console.log( longest("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz") )
