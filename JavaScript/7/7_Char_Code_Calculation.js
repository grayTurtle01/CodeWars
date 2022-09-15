function calc(x){
    total1 = ''
    
    for( c of x ){
       charCode = c.charCodeAt()
       total1 += charCode 
    }
    
    total2 = total1.replace(/7/g, '1')

    sum1 = 0
    for( digit of total1 ){
        sum1 += Number(digit)
    }

    sum2 = 0
    for( digit of total2 ){
        sum2 += Number(digit)
    }
    
    return sum1 - sum2

}

console.log(calc("abcdef"))


