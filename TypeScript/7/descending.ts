export function descendingOrder(n: number): number {
  // your code here
  //let str_n = String(n).split('').sort((a:string,b:string) => (b-a) ).join('')
  let str_n_sorted = String(n).split('').sort().reverse().join('')
   
  return Number(str_n_sorted) 
  
}

