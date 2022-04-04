function getCount(str) {
  var vowelsCount = 0;
  
  // enter your majic here
  vowels = 'aeiou'
  for(c of str){
    if( vowels.search(c) != -1 )
      vowelsCount++
  }
  //console.log(vowelsCount)
  return vowelsCount;
}
