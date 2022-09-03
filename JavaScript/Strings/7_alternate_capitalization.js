function capitalize(s){
  s1 = ''
  s2 = ''

  for(index in s){
    c = s[index]
      
    if( index % 2 == 0){
        s1 += c.toUpperCase()
        s2 += c
    }
    else{
       s1 += c
       s2 += c.toUpperCase() 
    }

  }   
    
  return [s1, s2];
};

console.log(capitalize("abcdefg"))
