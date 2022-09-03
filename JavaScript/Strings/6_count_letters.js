function count (string) {  
  // The function code should be here
    let counter = {}  

    for( c of string.toLowerCase() ){
        if( c in counter ){
            counter[c] += 1
        }
        else{
            counter[c] = 1
        }
        
    }

  
    return counter;
}

console.log(count(''))
