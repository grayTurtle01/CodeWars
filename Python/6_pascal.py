# Get all the pascal's triangle numbers for a number of rows

from math import factorial 

def pascals_triangle(rows):
    result = []
    for n in range(rows):
        line = []
        for k in range(n+1):
            value =  get_pascal_value(n,k)
            
            line.append( value)

        result = result + line

    return result

def get_pascal_value(n, k):
    value = int(factorial(n)//(factorial(k)*factorial(n-k)))
    return value

print(pascals_triangle(1))

            
