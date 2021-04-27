function solution(str){
  if( str == '')
    return []
  
  couples = str.match(/[\w]{2}/g)
  
  if( couples == null)
    return [str+'_']
  
  if(str.length % 2 == 1){
    last_pair = str.slice(-1) + '_'
    couples.push(last_pair)
  }
  
  return couples
}

console.log(solution("a"))
