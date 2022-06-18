// board 10x10
// 1 on
// 0 off
        
// 1 battleship : 4 cells
// 2 cruisers   : 3 cells
// 3 destroyers : 2 cells
// 4 submarines : 1 cells

// => (4 + 6 + 6 + 4) = 20 on



function validateBattlefield(field) {
  // Counts on cells
  let ons = countOnCells(field)
  if( ons != 20)
        return false;



  //~ let battleships = findBattleShips(field)
  let battleships = findLines(field,4)

  for( ship of battleships ){
        console.log(ship)
        printBoard(field)
        let field1 = removeLine(field, ship)

        let cruisers = findLines(field1, 3)
        if( cruisers.length < 2 )
            continue

        // Cruisers
        
        for(i = 0; i < cruisers.length - 1; i++ ){

            lines = [cruisers[i] + cruisers[i + 1]]
            for( line of lines){
                removeLine(field, line)

            }


            
        }

        // Destroyers    
        let destroyers = findLines(field, 2)

        for(i = 0; i < 3; i++){
            destroyer = destroyers[i]
            removeLine(field, destroyer)
        }

        // Submarines

        let submarines = findLines(field, 1)
        console.log(submarines)
  }

  return true
}

function countOnCells(field){
    let ons = 0

    for(y = 0; y < 10; y++){
        for(x = 0; x < 10; x++){
            if( field[y][x] == 1){
                ons++
            }
        }
    }

    return ons
}

function findBattleShips(field){
    battleships = []

    horizontal_battleships = getHorizontalLines(field, 4)
    vertical_battleships = getVerticalLines(field, 4)

    battleships = [...horizontal_battleships, ...vertical_battleships]

    //~ console.log(battleships)
    return battleships
}

function getHorizontalLines(field, length){
    horizontal_lines = []

    candidate = []

    // Horizontal lines
    for(y = 0; y < 10; y++){
        candidate = []
        for(x = 0; x < 10; x++){
            
            if( field[y][x] == 1 && candidate.length == 0){
                candidate.push( x )
            }
            
            else if( field[y][x] == 1 && field[y][x-1] == 1){
                candidate.push( x )
            }
            
            else{
                candidate = []
            }
            

            if( candidate.length == length){
                coords = {
                    x0: candidate[0],
                    y0: y,

                    xf: candidate[ candidate.length-1 ],
                    yf: y
                }
                
                horizontal_lines.push( coords )
                candidate = []
            }

        }
    }

    return horizontal_lines

}

function getVerticalLines(field, length){
    vertical_lines = []

    candidate = []

    // Horizontal lines
    for(x = 0; x < 10; x++){
        candidate = []
        for(y = 0; y < 10; y++){
            
            if( field[y][x] == 1 && candidate.length == 0){
                candidate.push( y )
            }
            
            else if( field[y][x] == 1 && field[y-1][x] == 1){
                candidate.push( y )
            }
            
            else{
                candidate = []
            }
            

            if( candidate.length == length){
                coords = {
                    x0: x,
                    y0: candidate[0],

                    xf: x,
                    yf: candidate[ candidate.length-1 ]
                }
                
                vertical_lines.push( coords )
                candidate = []
            }

        }
    }

    return vertical_lines

}

function findLines(field, length){
    lines = []

    horizontal_lines = getHorizontalLines(field, length)
    vertical_lines = getVerticalLines(field, length)

    lines = [...horizontal_lines, ...vertical_lines]

    //~ console.log(lines)
    return lines
}


function printBoard(field){
    console.log()
    for(y = 0; y < 10; y++){
        row = ''
        for(x = 0; x < 10; x++){
           row += field[y][x] + ', '  
        }

        console.log(row)
    }
}

function removeLine(field, line){

    let new_field = [...field]


    if( line.y0 == line.yf){
        let y = line.y0;
        for( x = line.x0; x <= line.xf; x++){
            new_field[y][x] = 0
        }
    }

    if( line.x0 == line.xf){
        let x = line.x0;
        for( y = line.y0; y <= line.yf; y++){
            new_field[y][x] = 0
        }
    }

    printBoard(new_field)
    return new_field
}

field = [
    [1,1,1,1,0,1,1,1,0,0],
    [1,1,1,0,1,1,0,1,1,0],
    [1,1,0,1,0,1,0,1,0,1],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],

    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0], 
]

fieldx = [
    [0,0,0,1,0,1,1,1,0,0],
    [1,1,1,0,1,1,0,1,1,0],
    [1,1,0,1,0,1,0,1,0,1],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],

    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0], 
]


console.log(validateBattlefield(field))

//~ console.log(findBattleShips(field))
//~ console.log(getHorizontalLines(field, 4))
//~ console.log(getVerticalLines(field,4))
//~ printBoard(field2)
//~ removeLine(field2, {x0: 0, y0: 5, xf: 0, yf: 8})

//~ console.log(getVerticalLines(field, 3) )

