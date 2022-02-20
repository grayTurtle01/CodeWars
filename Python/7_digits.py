def solution(digits):
    biggest_sequence = 0
    
    for i in range(len(digits)-4):
        chonk = digits[i:i+5]
        sequence = int(chonk)

        if sequence > biggest_sequence:
            biggest_sequence = sequence

    return biggest_sequence


print( solution("1234567890"))
