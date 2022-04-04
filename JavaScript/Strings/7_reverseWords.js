function reverseWords(str) {
  // Go for it
  words = str.split(" ")
  r = ""
  for( word of words){
    reverseWord = word.split("").reverse().join("")
    r += reverseWord + " "
  }
  r = r.trim()
  return r
}
