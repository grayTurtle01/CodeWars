def order_weight(strng):
    weights_str = strng.split()


    weights = [ str(get_weight(weight)) for weight in weights_str ]

    sorted_list = sorted(weights_str,
                         key= lambda weight: get_weight(weight))

    strng_result = " ".join(sorted_list)

    print(weights_str)
    print(weights)

    print()
    print(sorted_list)
    print(strng_result)

    return strng_result
    
def get_weight(number_str):
    weight = 0
    for digit in number_str:
        weight += int(digit)

    return weight





# ~ strng = "56 65 74 100 99 68 86 180 90" 
# ~ strng = "2000 10003 1234000 44444444 9999 11 11 22 123"
strng = "20 11 11 22 12"
# ~ strng = ""
order_weight(strng)

