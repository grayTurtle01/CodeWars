function removeDuplicateWords (s) {
  words = s.match(/\w+/g)
  
  res = []
  for(word of words)
    if( res.indexOf( word ) == -1)
      res.push(word)
  
  console.log(res)
  res_str = res.join(" ")
  //console.log(res_str)
  return res_str
  
}
removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')
