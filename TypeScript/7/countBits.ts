function countBits(n: number): number {
  let total:number = 0;

  // transform decimal-number to binary
  let bin_str = n.toString(2)

  // count up bits
  for(let bit of bin_str)
    if(bit == '1')
      total += 1

  return total
}
