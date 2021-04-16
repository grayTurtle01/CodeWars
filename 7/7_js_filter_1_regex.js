function searchNames( logins ){
  
 r = logins.filter( login => {
    user = login[0]
    if( /_$/.test(user) )
      return login
  })
  
  return r
}
