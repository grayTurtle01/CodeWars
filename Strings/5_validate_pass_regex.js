function validate(password) {
  if(/\W/.test(password) )
    return false
  
  if( /\w{6,}/.test(password) )
    if( /\d/.test(password) )
      if( /[a-z]/.test(password) )
        if( /[A-Z]/.test(password) )
          return true
  
  return false
}

console.log(validate('fjd3IR9.;'))
