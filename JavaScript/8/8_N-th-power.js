function index(array, n){
    
    if( n > (array.length - 1) )
        return -1

    let x = array[n]

    return Math.pow(x,n)
}
