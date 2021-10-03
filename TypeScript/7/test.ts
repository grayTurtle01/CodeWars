function findShort(s: string): number {
  let words:string[] = s.split(" ")

  let min_length:number = 1000;

  for(let word of words){
    if( word.length < min_length ){
      min_length = word.length
    }
  }

  return min_length;
}

console.log(findShort("hello world"))
