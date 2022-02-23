import re
import itertools

def next_bigger(n):
    n_str = str(n)
    digits = list(re.findall('[0-9]', n_str ))

    permutations = list( itertools.permutations(digits) )

    #remove repeated values
    permutations = list( set( permutations) )

    permutations_int = []

    # each permutation tupla to str number
    for permutation in permutations:
        number_str = "".join(permutation)
        permutations_int.append( int(number_str) )


    # sort number
    permutations_int.sort()
    print(permutations_int)

    index = permutations_int.index(n)

    if index == len(permutations_int) -1:
        return -1

    else:
        next_bigger_int = permutations_int[index+1]
        return next_bigger_int

    

print(next_bigger(144))
