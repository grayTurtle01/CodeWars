// decode(array_number, key ) --> string

function num2letter(number){
    ascii_number = number + 96
    real_character = String.fromCharCode(ascii_number)
    return real_character
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


console.log(decode([ 20, 12, 18, 30, 21],1939))
console.log(decode([ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8],1939))
