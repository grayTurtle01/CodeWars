function findNb(m: number): number {

  let large:number = 1;
  let total_V:number = 0;

  while( total_V < m ){
    total_V += large**3
    large++
  }

  if( total_V == m )
    return large-1
  else
    return -1
}


console.log(findNb(91716553919377))
