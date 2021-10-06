function iqTest(numbers: string): number {
  // String numbers to Array numbers
  let integers:number[] = numbers.split(' ').map( (str_num) => parseInt(str_num))
  console.log(integers)

  let isEvenArray:boolean = false;

  // Find the kind of array
  if( integers[0] % 2 == 0 && integers[1] % 2 == 0)
    isEvenArray = true

  if( integers[0] % 2 == 0 && integers[2] % 2 == 0)
    isEvenArray = true

  if( integers[1] % 2 == 0 && integers[2] % 2 == 0)
    isEvenArray = true

  // Search the outlier index
  let index:number;
  for(let i = 0; i < integers.length; i++){

    if( isEvenArray )
      if( Math.abs(integers[i] % 2 ) == 1){
        index = i;
        break;
      }

    if( !isEvenArray )
      if( integers[i] % 2 == 0){
        index = i
        break;
      }
  }

  return index + 1;
}

console.log(iqTest("0 0 0 1 2"))
