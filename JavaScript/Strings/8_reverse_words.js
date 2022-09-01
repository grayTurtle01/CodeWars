function reverseWords(str){
  let words = str.split(" ")
  let words_reverse = words.reverse()
  let str_reverse = words_reverse.join(" ")
  return str_reverse

}

reverseWords("Hello world")

