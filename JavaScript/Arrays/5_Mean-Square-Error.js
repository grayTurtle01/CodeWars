var solution = function(firstArray, secondArray) {
    
    if(firstArray.length != secondArray.length )
        return 0

    dx_squares = []

    for( i = 0; i < firstArray.length; i++){
        let dx = Math.abs(firstArray[i] - secondArray[i])
        dx_squares.push( dx * dx )
    }

    let sum = dx_squares.reduce( (total, value) => (total + value) )
    let length = firstArray.length
    
    let average = sum / length

    return average 
}


console.log(solution([10,20,10,2],[10,25,5,-2]))
