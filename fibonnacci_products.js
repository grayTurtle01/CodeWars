function fibonacci(n){
  if( n == 0)
    return 0
  else if( n == 1)
    return 1
  else{
    return fibonacci(n-1) + fibonacci(n-2)
  }
}

function productFib(prod){
  n = 0
  f0 = fibonacci(n)
  f1 = fibonacci(n+1)
  
  while( f0 * f1 < prod){
    console.log(f0,f1,f0*f1)
     n++;
     f0 = fibonacci(n)
     f1 = fibonacci(n+1) 
  }
  
  if( f0 * f1 == prod )
    return [f0, f1, true]
  else
    return [f0, f1, false]
  
}


