function solution(str, ending){
  console.log(str, ending)
  try{
    myRegex = new RegExp(ending + '$')
    return myRegex.test(str)
  }catch(err){
    length = ending.length
    return str.slice(-length) == ending  
  }
}

