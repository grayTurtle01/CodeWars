function getSum(a: number, b: number): number {
  let sum:number = 0;

  let min:number;
  let max:number;

  if( a <= b ){
    min = a;
    max = b;
  }
  else{
    min = b;
    max = a;
  }
    

  for(let i = min; i <= max; i++){
    sum += i
  }

  return sum
}

console.log(getSum(5,5) )
