// return masked string
function maskify(cc) {
  if( cc.length < 5 )
    return cc
    
  first_chunck = cc.slice(0,-4)
  last_chuck = cc.slice(-4)
  
  first_chunck = first_chunck.replace(/\w/g, '#')
  
  r = first_chunck + last_chuck
  return r
  
}

