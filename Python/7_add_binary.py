def count_by(x, n):
    """
    Return a sequence of numbers counting by `x` `n` times.
    """
    result = []
    for i in range(1, n+1):
        result.append( x * i)

    return result
