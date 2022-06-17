function solution(list){

    let result = ''

    let range = []
    let last = []
    
    for(i=0; i < list.length-1; i++){
        x = list[i]
        range.push(x)

        next = list[i+1]


        if( i == (list.length - 2) ){
            if( (x + 1) == next )
                range.push(next)
            else
                last.push(next)
        }

        // break range
        if( (x + 1) != next || (i == list.length - 2) ){
            
            if( range.length >= 3){
                min = range[0]
                max = range[range.length - 1]

                str = min + '-' + max + ','
                
                result += str
            }
            else{
                range.forEach( number => result += number + ',')
            }

            range = []
        }
    }

    if( last.length == 1 ){
        console.log(last)
        result += last[0]
    }
    else{
        result = result.slice(0, result.length-1)
    }
    
    console.log(result)
    return result
}


solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
