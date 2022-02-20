def number(lines):
    new_lines = []
    
    for i,line in enumerate(lines):
        new_line = f"{i+1}: {line}"
        new_lines.append(new_line)


    return new_lines
        


