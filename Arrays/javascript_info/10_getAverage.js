//  get the Average of the array of persons

// Parameters: Array
// Result :  number
// Example: [{ name: "John", age: 1, id: 1 },
//           { name: "John", age: 2,  id: 2 }];

//-->      1.5

function getAverage(persons){
  sum = 0
  persons.forEach( person => {sum += person.age})
  
  return sum / persons.length
}

console.log( getAverage([{ name: "John", age: 1, id: 1 },
                         { name: "John", age: 2,  id: 2 }]) )
