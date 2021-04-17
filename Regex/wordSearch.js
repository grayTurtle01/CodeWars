function wordSearch(word, text){
  myReg = new RegExp(word)
  
  r = myReg.test(text)
  
  return r
}
