function isTriangle(a: number, b: number, c: number): boolean {
  // Check invalid values
  if( a <= 0 || b <= 0 || c <= 0)
    return false;

  // Check formula
  if( a + b > c )
    if( a + c > b)
      if ( b + c > a)
        return true

  return false;
}

console.log(isTriangle(1,1,2))
