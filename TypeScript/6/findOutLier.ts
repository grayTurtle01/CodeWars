function findOutlier(integers: number[]): number {
  let isEvenArray:boolean = false;

  // Find the kind of array
  if( integers[0] % 2 == 0 && integers[1] % 2 == 0)
    isEvenArray = true

  if( integers[0] % 2 == 0 && integers[2] % 2 == 0)
    isEvenArray = true

  if( integers[1] % 2 == 0 && integers[2] % 2 == 0)
    isEvenArray = true

  // Search the outlier
  for(let i = 0; i < integers.length; i++){

    if( isEvenArray )
      if( Math.abs(integers[i] % 2 ) == 1)
        return integers[i]

    if( !isEvenArray )
      if( integers[i] % 2 == 0)
        return integers[i]
  }
}

console.log(findOutlier([ 2, -6, 8, -10, -3 ]))
