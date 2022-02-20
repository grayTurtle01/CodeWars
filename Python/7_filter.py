def filter_list(l):
  'return a new list with the strings filtered out'
  new_list = []
  for i in l:
      if type(i) == int:
          new_list.append(i)

  return new_list
