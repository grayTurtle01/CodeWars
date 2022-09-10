function bingo(ticket, win){
    wins = 0

    for( arr of ticket ){
        word = arr[0]
        number = arr[1]

        for( c of word ){
            charCode = c.charCodeAt()
            if( charCode == number ){
                wins++
                continue
            }
        }
    }

    if( wins >= win )
        return "Winner!"

    return "Loser!"
}


console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2))
