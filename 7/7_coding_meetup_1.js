function countDevelopers(list) {
  
  counter = 0
  list.forEach( dev => {
    if( dev.continent == "Europe")
      if( dev.language == 'JavaScript')
        counter++
  })
  
  return counter
}
