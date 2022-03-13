def scramble(s1, s2):
    letters = {}

    for c in s2:
        if c not in s1:
            return False

        if c not in letters:
            letters[c] = 1
        else:
            letters[c] += 1 
        
    for letter in letters:
        if s1.count(letter) < letters[letter]:
            return False


    return True


print(scramble('scriptjavx', 'javascript'))
    
