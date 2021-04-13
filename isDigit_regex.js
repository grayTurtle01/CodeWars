function isDigit(username) {
  
  res =  /^[0-9]$/.test(username) 
  return res
}

isDigit("a")
