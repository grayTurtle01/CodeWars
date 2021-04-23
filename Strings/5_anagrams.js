function anagrams(word, words) {
  base_word = word.split('').sort().join('')
  
  r = []
  for(w of words){
    sorted_word = w.split('').sort().join('')
    if( sorted_word == base_word )
      r.push(w)
  }
  
  console.log(r)
  return r
}

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])

