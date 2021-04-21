// write the function isAnagram
var isAnagram = function(test, original) {
  first_word = test.toLowerCase().split('').sort().join('')
  second_word = original.toLowerCase().split('').sort().join('')
  
  return first_word == second_word
};

console.log(isAnagram('leon', 'noel'))
