// Calculate the total amount of points from an array of football results

//Parameters : Array
//Result: Number
//Example: ["2:1", "1:1"] --> 3

function points(games) {
  result = 0
  games.forEach( game => {
    goals = game.split(':')
    if( goals[0] > goals[1] )
      result += 3
    else if( goals[0] == goals[1] )
      result += 1
  })
  
  return result
}

console.log( points(["2:1", "1:1"]) )
