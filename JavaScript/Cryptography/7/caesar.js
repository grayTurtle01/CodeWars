function letter2num(letter){
    let c = letter.toLowerCase()

    let delta = c.charCodeAt() - 96

    return delta
    
}

function num2letter(number){
    ascii_number = number + 96
    real_character = String.fromCharCode(ascii_number)
    return real_character
}

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

    return result
}

function decode(num_array, key){
    let msg = ''

    let key_str = String(key)

    for( i in num_array ){

        num = num_array[i]
        index = i % key_str.length  

        df = key_str[index]
        
        real_num = num - parseInt(df) 
        real_character = num2letter(real_num)

        msg += real_character
    }

    return msg
}

function caesar(str, key){
    encoded_msg =  encode(str, key)
    console.log(encoded_msg)

    
        
    msg = decode(encoded_msg, key)
    console.log(msg)
}

caesar('ibm', 1)

