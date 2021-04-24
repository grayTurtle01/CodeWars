function incrementString (strng) {
  if( strng == '')
    return '1'
  
  letters = strng.match(/[a-z]+/g)
  if(letters == null )
    letters = ''
  
  numbers = strng.match(/\d+/g)
  if( numbers == null )
    return letters + '1'
  
  num_str = numbers[0]
  if( num_str.endsWith('0') )
    return letters + num_str.slice(0,-1) + '1'
  
  
  zeros = num_str.match(/0+/)
  if( zeros == null)
    zeros = ''
  
  number = Number(num_str)
  number = (number + 1)
  
  
  length_number = String(number).length
  console.log(length_number)
  
  n = num_str.length - length_number
  if( n < 0 )
    n = 0
  
  return r = letters + '0'.repeat(n) + number
}
