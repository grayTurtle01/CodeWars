// TimeOut: Use Memoization to solve it

function sumPairs(ints, s) {

    result = undefined

    j_max = ints.length
    
    for(i = 0; i < ints.length-1; i++){

        first = ints[i]

        if (i > j_max )
            break

        for(j = i + 1; j < j_max; j++ ){

            second = ints[j]

            if( j < j_max && (first + second) == s){

                result = [first, second]
                j_max = j
            }

        }

    }

    return result
    
}

//~ console.log(sumPairs([11, 3, 7, 5],         10))
//~ console.log(sumPairs([4, 3, 2, 3, 4],         6))
//~ console.log(sumPairs([0, 0, -2, 3], 2))
//~ console.log(sumPairs([10, 5, 2, 3, 7, 5],  10))

//~ console.log(sumPairs([1, 2, 3, 4, 1, 0], 2))
//~ console.log( sumPairs([1, -2, 3, 0, -6, 1], -6) )
console.log(sumPairs([5, 9, 13, -3], 10))
