def pig_it(text):
    words = text.split(' ')

    new_words = []

    for word in words:

        if ('!' in word) or ('?' in word):
            new_word = word
        else:
            new_word = word[1:] + word[:1] + 'ay'
            
        new_words.append(new_word)

    return " ".join(new_words) 


pig_it("Pig latin is cool !")
