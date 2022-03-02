def hex_string_to_RGB(hex_string):
    R = hex_string[1:3]
    G = hex_string[3:5]
    B = hex_string[5:7]

    r = int(R, base=16)
    g = int(G, base=16)
    b = int(B, base=16)

    rgb_dict = {'r':r, 'g':g, 'b':b }
    return rgb_dict

print(hex_string_to_RGB('#111111'))
