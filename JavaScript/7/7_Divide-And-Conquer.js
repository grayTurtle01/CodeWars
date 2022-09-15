function divCon(x){
    result = 0
    
    for( item of x ){
        if( typeof(item) == 'string' ){
            result -= Number(item)
        }
        else{
            result += item
        }
    }

    return result
}

console.log(divCon([9, 3, '7', '3']))
