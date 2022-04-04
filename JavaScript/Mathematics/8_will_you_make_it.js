// Determine if your fuel is enough, to reach the goal

//Parameters : Number, Number, Number
//Result: Boolean
//Example: 50, 25, 2 --> true

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  if( mpg * fuelLeft >= distanceToPump )
      return true
  
  return false
};

