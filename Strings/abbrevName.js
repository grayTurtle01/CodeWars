function abbrevName(name){
  words = name.split(" ")
  r = words[0][0].toUpperCase() + '.' + words[1][0].toUpperCase()
  return r
}
