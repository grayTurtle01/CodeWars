def longest_consec(strarr, k):

    # Invalid cases
    if len(strarr) == 0 or k > len(strarr) or k < 0:
        return ''

    biggest = ''

    for i in range(len(strarr)-k+1):
        chonk = ''
        for j in range(i, i+k):
            chonk += strarr[j]

        if len(chonk) > len(biggest):
            biggest = chonk

    return biggest

print( longest_consec(['ejjjjmmtthh', 'zxxuueeg', 'aanlljrrrxx', 'dqqqaaabbb', 'oocccffuucccjjjkkkjyyyeehh'], 1))
