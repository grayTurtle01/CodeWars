// get the state of the tic-tac-toe Game

//Parameters : Array of Arrays
//Result: Number
//Example: [[1,1,1], [0,2,2],[1,2,0] ]  --> 1

function isSolved(board) {
  // TODO: Check if the board is solved!
  
  /// ROWS
  for( row of board) {
    if( row[0] == row[1] && row[0] == row[2] &&  row[0] != 0)
      return row[0]
  }
  
  /// COLUMNS
  row0 = board[0]
  row1 = board[1]
  row2 = board[2]
  
  for(i=0; i < 3; i++)
    if( row0[i] == row1[i] && row1[i] == row2[i]  && row[i] != 0)
      return row0[i]
  
  /// DIAGONALS
  if( row0[0] == row1[1] && row0[0] == row2[2] && row0[0] != 0)
    return row0[0]
  
  if( row0[2] == row1[1] && row0[2] == row2[0] && row0[2] != 0)
    return row0[0]
  
  /// Unfinish Game
  for( row of board )
    if( row.includes(0) )
      return -1
  
  return 0
}

board = [[0,0,2],[0,0,0],[1,0,1]]

console.log( isSolved(board) )
