def cakes(recipe, available):

    num_cakes = 1e6
    
    for ingredient in recipe:
        
        try:
            portion = available[ingredient]//recipe[ingredient]
        except:
            num_cakes = 0
            break
            
        if portion < num_cakes:
            num_cakes = portion
        
        
    return num_cakes

cakes({'flour': 500, 'sugar': 200, 'eggs': 1}, {'flour': 1200, 'sugar': 1200, 'eggs': 5, 'milk': 200})
cakes({'flour': 500, 'sugar': 200, 'eggs': 1}, { 'sugar': 1200, 'eggs': 5, 'milk': 200})
