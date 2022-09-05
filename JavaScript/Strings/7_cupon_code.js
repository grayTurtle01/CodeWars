function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){

    if( enteredCode !== correctCode )
        return false

    d1 = new Date( currentDate )
    d2 = new Date( expirationDate )

    if( d1 > d2 )
        return false


  return true
}

console.log(checkCoupon('123','123a','September 5, 2014','October 1, 2014'))



