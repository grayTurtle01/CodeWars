function findUniq(arr: number[]): number {

  if( arr[0] == arr[1] && arr[1] != arr[2])
    return arr[2]

  if( arr[0] == arr[2] && arr[0] != arr[1])
    return arr[1]

  if( arr[1] == arr[2] && arr[0] != arr[1])
    return arr[0]


  // Search the outlier
  let arr_filtered:number[] = arr.filter( num => num != arr[0] )

  let outlier:number = arr_filtered[0]
  return outlier
}

console.log(findUniq([4,4,4,1,4,4,4]))
