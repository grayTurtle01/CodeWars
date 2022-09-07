// Parameters: Array of ages 
// Return: Array of two ages
// Example: [2, 10, 1, 22] --> [10, 22]

function twoOldestAges(ages){
   let sortedAges = ages.sort( (a,b) => (a - b) )
   let oldests = sortedAges.slice(-2)

   return oldests 
    
}

console.log( twoOldestAges([2, 10, 1, 22]))
