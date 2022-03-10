def dirReduc(arr):
    to_check = True
    changed = False

    while to_check:

        changed = False
        
        for index in range(len(arr)-1):
            dir1 = arr[index]
            dir2 = arr[index+1]

            if is_redundant(dir1, dir2):
                 arr.pop(index)
                 arr.pop(index)
                 to_check = True
                 changed = True
                 break
                 
        if changed:
            to_check = True
        else:
            to_check = False

    return arr

def is_redundant(dir1, dir2):
    dir1 = dir1.lower()
    dir2 = dir2.lower()

    if dir1 == 'north' and dir2 == 'south':
        return True

    if dir1 == 'south' and dir2 == 'north':
        return True

    if dir1 == 'west' and dir2 == 'east':
        return True

    if dir1 == 'east' and dir2 == 'west':
        return True

    return False



dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])


