function highestRank(arr){
    freq = {smallest: -1e6 }

    for( value of arr ){
        if( value in freq ){
            freq[value] += 1
        }
        else{
            freq[value] = 1
        }
    }

    let maxFreq = 'smallest'
    for( key in freq ){
        if( freq[key] > freq[maxFreq] ){
            maxFreq = key
        }

        if( freq[key] == freq[maxFreq] && key > maxFreq ){
            maxFreq = key
        }
    }

    return Number(maxFreq)
}


console.log(highestRank([1,1,2,2,3,3,0,0,0]))
