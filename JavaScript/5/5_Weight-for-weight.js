function orderWeight(strng) {
    weights = strng.split(" ")

    console.log(weights)

    weights.sort((a,b) => a.localeCompare(b) )
    //~ weights.sort()
    console.log(weights)
    
    weights.sort( compare )
    console.log(weights)


    result = weights.join(" ")
    console.log(result)

    return result  
        
    
}

function compare(a,b){

    dx = Weight2weight(a) - Weight2weight(b)

    if( dx < 0)
        return -1
    else if( dx > 0)
        return 1
    else
        return 0
    
}


function Weight2weight(weight_str){

    weight_str = weight_str.trim()

    w = 0
    for(digit of weight_str){
        w += Number(digit)
    }

    return w;
}

//~ orderWeight("56 65 74 100 99 68 86 180 90")
//~ orderWeight("103 123 4444 99 2000")
//~ orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")
orderWeight("3 16 9 38 95 1131268 49455 347464 59544965313 496636983114762 85246814996697 71899703 200 6 91 425 4 67407 7 96488 6 4 2 7 31064 9 7920 1 34608557 27 72 18 81")


//~ '1 2 200 4 4 6 6 7 7 27 18 81 9 72 91 425 31064 7920 67407 96488 34608557 71899703'
//~ '1 2 200 4 4 6 6 7 7 18 27 72 81 9 91 425 31064 7920 67407 96488 34608557 71899703'

//~ console.log(Weight2weight('100'))


s = ['4', '1', '3', '0', '27', '18',]
s = ['27','180']
s.sort()
//~ console.log(s)


