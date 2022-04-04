// create a function that makes the basic arithmetic operations

//Parameters : Number, Number, String
//Result: Number
//Example: 1,2,'add' --> 3

function arithmetic(a, b, operator){
  //your code here!
  switch( operator){
    case 'add':
      return a + b
    case 'subtract':
      return a - b
    case 'multiply':
      return a * b
    case 'divide':
      return a / b
  }
}


console.log( arithmetic(1,2,'divide') )
