// Sort Array of persons by Age  

// Parameters: Array
// Result :  Array
// Example: [{ name: "John", age: 12 },
//           { name: "Bob", age: 11} ];

//-->       [{ name: "Bob",  age: 11 },
//           { name: "John", age: 12 }];

function foo(persons){
  persons.sort( (p1, p2) => (p1.age - p2.age) )
  return persons
}

console.log( foo([{ name: "John", age: 12 },
                  { name: "Bob", age: 11} ]) )
