function findUniq(arr){
    first = getUniqLetters(arr[0])
    second = getUniqLetters(arr[1])

    pivot = ''
    if( first == second ){
        pivot = first
    }
    else {
        third = getUniqLetters(arr[2])

        if( third == first ){
            return arr[1]
        }

        if( third == second ){
            return arr[0]
        }
        

    }

    for( i = 2;  i < arr.length; i++ ){
        candidate = getUniqLetters(arr[i])

        if( candidate != pivot ){
            return arr[i]
        }
    }
}

function getUniqLetters(word){
    word = word.toLowerCase()
    letters = word.split('')

    uniqueLetters = []

    for( c of letters ){
        if( uniqueLetters.includes(c) )
            continue

        uniqueLetters.push(c)
    }

    return uniqueLetters.sort().join('')
}

console.log( findUniq(['aaa', 'bbb', 'aaa', 'aa']))
