function nbYear(p0, percent, aug, p) {
  percent_decimal = percent/100.00
  
  if( p0 < p){
    pn = p0 + (p0 * percent_decimal) + aug
    n = 1
  }
  else
    return 0
    
  while( pn < p){
    p0 = pn
    pn = p0 + (p0 * percent_decimal) + aug
    n++
  }
  
  return n 
}

console.log( nbYear(1500000, 2.5, 10000, 2000000) )
