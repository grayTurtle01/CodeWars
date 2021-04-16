function vowel2index(str) {
  r = ""
  for(i  in str){
    c = str[i]
    if( /[aeiou]/i.test(c) == true )
      r += Number(i)+1
    else
      r += c
  }
  
  console.log(r)  
  return r
}

//vowel2index("this is my string")

r = "abcedf".replace(/[aeiou]/g, (x,i) => {
  console.log(x, i)
  return i + 1
  })

console.log(r)
