// Create a square-matrix of multiplication-table

// Parameters: Size of the Matrix
// Return: An Array of Arrays

// Example: 3 --> [ [1,2,3], [2,4,6], [3,6,9] ]

multiplicationTable = function(size) {
    let matrix = []

    for( y = 0; y < size; y++){
        let row = []
        for( x = 0; x < size; x++){
            let value = (y + 1) * (x + 1)
            row.push(value)
        }

        matrix.push(row)
    }

    return matrix
}

console.log( multiplicationTable(4))
