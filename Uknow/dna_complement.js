function DNAStrand(dna){
  dna_array = dna.split("")
  let newArray = dna_array.map( (letter) => {
    if( letter == 'A' )
      return 'T'
    else if( letter == 'T' )
      return 'A'
    else if( letter == 'C' )
      return 'G'
    else if( letter == 'G' )
      return 'C'
  })
  newString = newArray.join("")
  return newString
}

console.log( DNAStrand("GTAT"))
