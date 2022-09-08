function encode(string) {
  let dic = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5}

  let encoded_string = ''

  for(c of string){
    if( c in dic ){
        encoded_string += dic[c]
    }
    else{
        encoded_string +=c 
    }
  }  

  return encoded_string
}

function decode(string) {
  let dic = {1: 'a', 2:'e', 3:'i',  4:'o', 5: 'u'}

  let decoded_string = ''

  for(c of string){
    if( c in dic ){
        decoded_string += dic[c]
    }
    else{
        decoded_string +=c 
    }
  }  

  return decoded_string
}

console.log(encode("hello world"))
console.log(decode("h2ll4 w4rld"))
