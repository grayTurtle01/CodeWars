function diamond(n){
  
  if( n % 2 == 0)
    return null
  if( n <= 0)
    return null
  
  spaces = n/2;
  signs = 1
  
  diam = ""
  
  for(i=1; i<=n; i++){
    row = ""
    for(k=1; k<=spaces; k++)
      row += " "
    for(j=1; j <= signs; j++)
      row += '*'
    
    //console.log(row)
    diam += row + "\n"
     
     if( i < n/2){
      signs += 2;
      spaces--;
     }
     else{
      signs -= 2;
      spaces++;
    }
  }
  
  //console.log(diam)
  return diam;
}

