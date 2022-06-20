function nbDig(n, d) {
  let count = 0;

  for(i = 0; i <= n; i++){
     let square = String(i * i);

     for(c of square){
        if( c == String(d) )
            count++
     } 
        
  }      
  return count
}


console.log(nbDig(25,1))
