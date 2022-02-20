def bouncing_ball(h, bounce, window):

    if (h <= 0) or ( bounce <= 0 or bounce >= 1) or ( window >= h ):
        return -1
    
    views = 1
    y_max = h

    y_max = bounce * y_max
    
    while y_max > window:
        views += 2
        y_max = bounce * y_max


    return views

print(bouncing_ball(3, 1, 1.5))
