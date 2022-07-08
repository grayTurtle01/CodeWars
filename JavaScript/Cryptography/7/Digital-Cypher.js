
function encode(str, number){

    let str_number = String(number)
    
    let result = []

    for( i in str ){
        c = str[i]
        value = letter2num(c)

        number_index = i % str_number.length
        number_value = str_number[number_index]
            
        r = value + parseInt(number_value)

        result.push(r)
    }

    console.log(result)
}

function letter2num(letter){
    let c = letter.toLowerCase()

    let delta = c.charCodeAt() - 96

    return delta
    
}

encode('scout', 1939)
encode('masterpiece', 1939)
