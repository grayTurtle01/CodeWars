# Sort only the odds number in one array of numbers
def sort_array(source_array):
    
    for i in range(len(source_array)):
        for j in range(i + 1, len(source_array)):
            pivot = source_array[i]
            iterator = source_array[j]
            if (pivot % 2 == 1) and (iterator % 2 == 1):
                if pivot > iterator:
                    source_array[i] = iterator
                    source_array[j] = pivot
                        
                     
    return source_array

print( sort_array([5, 3, 2, 8, 1, 4, 11]))

