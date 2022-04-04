function greetDevelopers(list) {
  new_list = list.map( dev => {
      return dev.greeting = `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`
    })
    
  return new_list
}
