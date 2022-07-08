// The Wire : BarksDale Code

function decode(number){
    dic = {
      '1': 9,
      '2': 8,
      '3': 7,
      '4': 6,
      '5': 0,
      '6': 4,
      '7': 3,
      '8': 2,
      '9': 1,
      '0': 5
    }

    str_number = String(number)

    real_number= ''

    for( digit of str_number ){
        decoded_digit = dic[digit]

        real_number += String(decoded_digit)
    }
    
    return real_number
}

console.log(decode(1234567890))



