// From one string separated by - create another string camelCase

// Parameters: String
// Result : String
// Example: "hello-world-bye" --> "helloWorldBye"

function camelize(str){
  words = str.split('-')
  console.log(words)
  result = words[0]
  
  for(i = 1; i < words.length; i++){
    firstLetter = words[i][0].toUpperCase()
    letters = words[i].slice(1)
    newWord = firstLetter + letters
    result += newWord
  }
  
  console.log(result)
  return result
}

camelize("hello-world-bye")
