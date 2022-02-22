# Show all the squares inside rectangle's area
def sqInRect(lng, wdth):

    # trivial case
    if lng == wdth:
        return None
    
    area = lng * wdth
    lengths = []

    while area >= 1:
        if lng <= wdth:
            short = lng
            wdth -= short
        else:
            short = wdth
            lng -= short
            
        area = area - short**2
        
        lengths.append(short)

            
    return lengths

print(sqInRect(3, 5))
