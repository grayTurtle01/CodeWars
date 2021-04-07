var numbers = [1, 2, 3, 4, 5];
//numbers = [];

Array.prototype.square = function (){
  squares = this.map( x => x**2)
  return squares
}

Array.prototype.cube = function (){
  cubes = this.map( x => x**3)
  return cubes
}

Array.prototype.average = function (){
  
  if( this.length == 0)
    return NaN
  
  sum = this.reduce( (sum, x) => (sum + x), 0)
  average = sum/this.length
  return average
}

Array.prototype.sum = function (){
  
  if( this.length == 0)
    return NaN
  
  sum = this.reduce( (sum, x) => (sum + x), 0)
  return sum
}

Array.prototype.even = function (){
  
  if( this.length == 0)
    return NaN
  
  evens = this.filter( (x) => (x%2 == 0))
  return evens
}

Array.prototype.odd = function (){
  
  if( this.length == 0)
    return NaN
  
  odds = this.filter( (x) => (x%2 != 0))
  return odds
}


numbers.foo()
//console.log(numbers.square())

