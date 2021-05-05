// extract the names of the array of objects 

// Parameters: Array of objects
// Result :  Array of string
// Example: [{'name': 'Bob'}, {'name': 'Alice'}] --> ['Bob', 'Alice'] 

function foo(persons){
  return persons.map( person => person.name)
}

console.log( foo([{'name': 'Bob'}, {'name': 'Alice'}]) )
