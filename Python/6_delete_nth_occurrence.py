def delete_nth(vector, n):
    counter = {}

    result = vector.copy()
    bad_indices = []

    for index, number in enumerate(vector):
        if number not in counter:
            counter[number] = 1
        elif number in vector:
            if counter[number] >= n:
               bad_indices.append(index)
            else:
                counter[number] += 1
            

    for index in bad_indices:
        if len(result) == len(vector):
            result.pop(index)
        else:
            delta = len(vector) - len(result)
            result.pop(index-delta)
            

    return result

vector = [1, 2, 3, 1, 1, 2, 1, 2, 3, 3, 2, 4, 5, 3, 1]
print(delete_nth(vector, 3) )
