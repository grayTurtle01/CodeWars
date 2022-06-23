const quarterOf = (month) => {
  // Your code here

  let div = month / 3  

  return Math.ceil( div )  
    
}

for(let i = 1; i <= 12; i++)
    console.log(quarterOf(i))
