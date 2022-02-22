# Transform the rectangle's area in squares
  
def sqInRect_easy(lng, wdth):
    area = lng * wdth

    squares = []

    while area > 1:
        for l in range(1, area+1):
            if l*l  > area:
                area = area - (l-1)**2
                squares.append(l-1)
                break

    if area == 1:
        squares.append(1)
            
    return squares

print(sqInRect(20, 14))
