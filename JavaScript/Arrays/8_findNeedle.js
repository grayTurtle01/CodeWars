// Found the index of the word 'needle'

//Parameters : Array of words
//Result: String
//Example: ['hello', 'word', 'needle'] --> 'found the needle at the position 2'

function findNeedle(haystack) {
  index = haystack.indexOf('needle')
  return 'found the needle at position ' + index
}
