from re import findall

def solution(s):

    words = []
    first_word = ''

    # get first word
    regex = '^[a-z]+'
    first_word = findall(regex,s)
            
    # last words
    regex = '[A-Z][a-z]+'
    last_words = findall(regex, s)

    words = first_word + last_words
    return " ".join(words)
    

print(solution("helloWorld"))


