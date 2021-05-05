// from an array of persons, get another array of persons with the full name

// Parameters: Array
// Result :  Array
// Example: [{ name: "John", surname: "Smith", id: 1 },
//           { name: "John", surname: "Bell",  id: 2 }];

//-->       [{ name: "John Smith", id: 1 },
//           { name: "John Bell",  id: 2 }];

function foo(persons){
 return persons.map( person => {
    fullname = person.name + ' ' + person.surname
    person.fullname = fullname
    
    delete person.name
    delete person.surname
    return person
 })
}

console.log( foo([{ name: "John", surname: "Smith", id: 1 },
                  { name: "John", surname: "Bell",  id: 2 }]) )
