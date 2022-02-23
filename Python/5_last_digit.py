def last_digit(n1, n2):

    base_last_digit = n1 % 10

    if n1 % 10 == 0:
        return 0

    if n2 % 2 == 0:
        return (base_last_digit + 2) % 10
    else:
        return (base_last_digit) % 10
        

#print( last_digit(9,8))    
print( last_digit(10,10**10))
