function accum(s: string): string {
  let char_array:string[] = s.split('')
  
  let result:string = ""

  char_array.forEach( (char, index) => {
    let chonck:string = char.repeat(index + 1).toLowerCase()
    let first_letter:string = chonck[0].toUpperCase()
    let format_chonk = first_letter + chonck.slice(1)

    result += format_chonk + '-'

  })
  return result.slice(0,-1)
}


console.log(accum('abcD'))
