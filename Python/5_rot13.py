def rot13(message):
    cypher_message = ''
    
    for c in message:
        new_c = caesar_char(c, 13)
        cypher_message += new_c
            
                
    return cypher_message

def caesar_char(c, delta):

    if not c.isalpha():
        return c

    is_lower = False
    if c.islower():
        is_lower = True
    
    c = c.lower()
    c_ascii = ord(c)

    new_ascci = c_ascii + delta

    if new_ascci > 122:
        new_ascci = 96 + new_ascci % 122
    
    new_char = chr(new_ascci)

    if is_lower:
        return new_char

    else:
        return new_char.upper()

print( rot13('Avoid success at all costs!'))
