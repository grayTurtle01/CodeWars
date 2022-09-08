function pickPeaks(arr){

  positions = []
  peaks = []  

  candidates = []  

  for(i = 1; i < arr.length-1; i++){
     if( arr[i-1] < arr[i] && arr[i] > arr[i+1] ){
        positions.push(i)
        peaks.push(arr[i])
     }

     if( arr[i-1] < arr[i] && arr[i] == arr[i+1]){
        handlePlateus(i, arr)
     }    
  }

  return {'pos': positions, 'peaks': peaks}
}

function handlePlateus(index, arr){
    i = index;
    
    while( i < arr.length){
        if( arr[i] > arr[i+1] ){
            positions.push(index)
            peaks.push(arr[index])
            break
        }

        if( arr[i] < arr[i+1]){
            break
        }

        i++;
    }
}


console.log(pickPeaks([0,1,2,1,1,5,5,2, 1,10,10,1,2,1]))
