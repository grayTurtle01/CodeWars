// Sort array by string length

// Parameters: Array of strings
// Response:   Array of strings
// Example:  ['abc', 'a', 'ab'] --> ['a', 'ab', 'abc']

function sortByLength (array) {
    let sortedArray = array.sort( (s1, s2) => (s1.length - s2.length) )

    return sortedArray
};

v = ['abc', 'a', 'ab']

console.log( sortByLength(v) )
