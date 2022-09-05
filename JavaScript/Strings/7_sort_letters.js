function sortGiftCode(code){
    let letters = code.split('')
    
    
    for( i = 0; i < letters.length-1; i++){
        
        for( j = i + 1; j < letters.length; j++ ){
            

            if( letters[j] < letters[i] ){
               tmp = letters[j]
               letters[j] = letters[i]
               letters[i] = tmp 
            }
            
        }
    }

   return letters.join('')
}

console.log(sortGiftCode('zefabycdwx'))
