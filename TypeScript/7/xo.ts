export function xo(str: string) :boolean {
  let x:number = 0;
  let o:number = 0;

  let char_array:string[] = str.split('')
  for(let char of char_array ){
     if( char.toLowerCase() == 'x')
       x += 1
    else if( char.toLowerCase() == 'o')
      o += 1
      
  }

  if( x == o )
    return true

  return false
}
