def assemble(arr):
    if len(arr) == 0:
        return ''
    
    result = arr[0]

    for word in arr:
        for i in range( len(word)):
            if result[i] != word[i] and result[i] == '*':
                
                left = result[0:i]
                c = word[i]
                right = result[i+1:]

                result = left + c + right

    result = result.replace('*', '#')

    return result        
    


data = [
  "a*cde",
  "*bcde",
  "abc*e"
]

data = [
  "a*c**",
  "**cd*",
  "a*cd*"
]

data = []

assemble(data)
