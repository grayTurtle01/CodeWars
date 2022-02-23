def max_sequence(arr):
    max_sum = 0

    for i in range(0, len(arr)):
        for delta in range(i+1, len(arr)+1): 
            chonk = arr[i:delta]
            if sum(chonk) > max_sum:
                max_sum = sum(chonk)
                
    return max_sum


max_sequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
