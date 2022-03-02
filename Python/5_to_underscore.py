import re
def to_underscore(string):
    # number case
    if type(string) == int or type(string) == float:
        return str(string)

    
    # string case
    words = re.findall('[A-Z][a-z0-9]+', string)

    lower_words = []
    for word in words:
        lower_word = word.lower()
        lower_words.append(lower_word)

    snake_case = '_'.join(lower_words)
    
    return snake_case


to_underscore("Hello23World12")
