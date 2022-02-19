def better_than_average(class_points, your_points):
    total_points = sum(class_points) + your_points
    average = total_points/(len(class_points) + 1)
    
    if your_points > average:
        return True
    else:
        return False
