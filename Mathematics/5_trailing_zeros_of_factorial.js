// get the number of trailing zeros of a factorial number

//Parameters : Number (n)
//Result: Number:Int number of trailing zeros
//Example: zeros(6) --> 6! = 720 --> 1

function zeros (n) {
  k_max = logN(5, n)
  k_max = Math.floor( k_max )
  
  z = 0
  
  for(k=1; k<=k_max; k++){
    z += Math.floor(n/(5**k))
  }
  
  return z
  
}

function logN(base, power ){
  return Math.log(power)/Math.log(base)
}


console.log( zeros(30) )
