function score(dice){
    counter = {}

    for( face of dice ){
        if( face in counter ){
            counter[face] += 1
        }
        else
            counter[face] = 1
    }
    
    

    result = 0
    
    // Triplets
    for( face = 1; face <= 6; face++ ){
        
        if( counter[face] >= 3 )
            if( face > 1 )
                result = face * 100
            else
                result =  1000
                
    }

    // Singles
    for( s of [1, 5]){
        if( s in counter )
            if( counter[s] < 3 ){
                if( s == 1)
                    result += counter[s] * 100
                else
                    result += counter[s] * 50
                
            }
            else if( counter[s] > 3 ){
                dx = counter[s] - 3
                if( s == 1)
                    result += dx * 100
                else
                    result += dx * 50
                
            }
            
    }
    return result

}

//~ score([5, 1, 3, 4, 1])
//~ score([1, 1, 1, 1, 3])
score([2, 4, 4, 5, 4])
//~ score([1, 1, 1, 1, 5])
