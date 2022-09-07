function grow(x){
   result = 1

   for( num of x ){
     result *= num       
   }

   return result 
}


console.log(grow([1,2,3]))
