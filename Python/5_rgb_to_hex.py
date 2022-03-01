# Convert three rgb values into a string hexadecimal value

# Example rgb(255,255,255) --> 'ffffff'
#         rgb(0,0,0) --> '000000'
 
def dec_2_hexaLetters(number):
    hexa = hex(number)
    hexa = hexa[2:]

    if len(hexa) == 1:
        hexa = '0' + hexa

    return hexa

def round_value(value):
    if value > 255:
        return 255
    elif value < 0:
        return 0
    else:
        return value

def rgb(r, g, b):
    result = ''

    r = round_value(r)
    g = round_value(g)
    b = round_value(b)
    
    result += dec_2_hexaLetters(r)
    result += dec_2_hexaLetters(g)
    result += dec_2_hexaLetters(b)


    return result.upper()

print(rgb_2_hex(148, 0, 211) )
