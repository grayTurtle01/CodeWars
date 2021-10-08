function narcissistic(value: number): boolean {
  // get digits
  let digits:string[] = value.toString().split("")

  // sum values
  let total:number = 0;
  let power:number = digits.length

  digits.forEach( (digit) => {
    let base:number = parseInt(digit);

    total += base**power 
  })

  // check result
  if( total == value )
    return true


  return false;
}

console.log(narcissistic(153))
