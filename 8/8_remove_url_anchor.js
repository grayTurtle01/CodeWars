function removeUrlAnchor(url){
  // TODO: complete
  chonks = url.split("#")
  return chonks[0]
}

console.log(removeUrlAnchor('www.codewars.com?page=1'))
