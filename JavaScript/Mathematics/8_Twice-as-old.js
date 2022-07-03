function twiceAsOld(dadYearsOld, sonYearsOld) {
    
    dad = dadYearsOld
    son = sonYearsOld
    result = 0

    for(i = sonYearsOld; i > 0; i--){
        dad--
        son--
        result++

        if( dad == son*2 )
            return result
    }


    dad = dadYearsOld
    son = sonYearsOld
    result = 0

    while( dad != son*2 ){
       dad++
       son++
       result++ 

    }

    return result

}

console.log(twiceAsOld(42, 21))
