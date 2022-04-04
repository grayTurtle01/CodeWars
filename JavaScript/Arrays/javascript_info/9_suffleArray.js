//  suffle randomly an array 

// Parameters: Array
// Result :  Array
// Example: [1,2,3,4] -- > [1,3,2,4];

function suffleArray(arr){
 
  for(i=0; i < 10; i++){ 
    index = Math.floor( Math.random() * (arr.length) )
    if( index < (arr.length-1) ){
       tmp = arr[index]
       arr[index] = arr[index + 1]
       arr[index + 1] = tmp
   }else{
       tmp = arr[index-1]
       arr[index-1] = arr[1]
       arr[1] = tmp
   }
  }
  return arr
}

function simulation(){
  obj = {}
  
  arr = [1,2,3]
  for(let i=1; i < 10000; i++){
    new_array = suffleArray(arr)
    key = new_array.join('')
    if( key in obj){
      obj[key]++;
    }else{
      obj[key] = 1
    }    
  }
  console.log(obj)
}

//console.log( suffleArray([1,2,3,4]) )
simulation()
