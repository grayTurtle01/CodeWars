//return the total number of smiling faces in the array
function countSmileys(arr) {
  if( arr.length  == 0)
    return 0
  
  counter = 0
  arr.forEach( face => {
    if( /[:;][-~]?[D\)]/.test( face ) )
      counter++
  })
  
  return counter
}

console.log( countSmileys([':)', ';(', ';}', ':-D']))
console.log(countSmileys([';D', ':-(', ':-)', ';~)']))
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']))
