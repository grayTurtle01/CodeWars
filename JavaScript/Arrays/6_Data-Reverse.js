
// Parameters: Array of bits
// Return: Array of bits
// Examples: [1,0,1,0,1,0,1,0, 0,0,0,0,0,0,0,0] --> [0,0,0,0,0,0,0,0, 1,0,1,0,1,0,1,0]

function dataReverse(data) {
    bytes = []

    for(i=0; i < data.length; i += 8 ){
        byte = data.slice(i, i+8)
        bytes.push( byte )
    }

    bytes_reverse = bytes.reverse()

    data_reverse = []
    for( byte of bytes_reverse){
        data_reverse.push( ...byte )
    }

    return data_reverse
}

dataReverse([1,0,1,0,1,0,1,0, 0,0,0,0,0,0,0,0])
