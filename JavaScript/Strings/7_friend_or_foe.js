function friend(friends){
    result = []

    for( f of friends ){
        if( f.length == 4 )
            result.push(f)
    }

    return result
}

