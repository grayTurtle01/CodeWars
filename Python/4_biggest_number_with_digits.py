import re

def next_bigger(n):
    n_str = str(n)
    digits = list(re.findall('[0-9]', n_str ))


    big_secuence = []


    while len(digits) > 0:
        big_current = -1
        for digit_str in digits:
            
            # find the bigest digit
            if int(digit_str) > big_current:
                big_current = int(digit_str)
                  
        big_secuence.append(str(big_current))
        digits.remove(str(big_current))

    
    bigest_number = int("".join(big_secuence))

    if bigest_number <= n:
        return -1
    else:
        return bigest_number

print(next_bigger(531))
