//new idea, all tile moves are a left move, rotate grid to allow this. Don't need to worry about out of bounds conditions



function rotateBoard(gameboard){
    
    let rotatedBoard = [];
    for(let col = BOARD_SIZE - 1;col >=0;col--){
        let newRow = [];
        for(let row = 0;row<BOARD_SIZE;row++){
            newRow.push(gameboard[row][col]);
        }
        rotatedBoard.push(newRow);
    }

    return rotatedBoard;

}

//check for mergable values starting at col 1. If it can merge, double in place, push 0, col[row-1] is pushes off the array
function mergeRow(row){
    
    for(let col = 1;col < BOARD_SIZE;col++){
        row[col] += row[col];
        row.push(0);
    }

    return row;

}


function moveAndMerge(direction, gameBoard){
    
    const arrowValMap = {
        ArrowLeft: 0,
        ArrowDown: 3, 
        ArrowRight: 2,
        ArrowUp: 1,

    };

    //rotate so movement is left
    numRotations = arrowValMap[direction];
    for(let i = 0; i<numRotations;i++){
        gameBoard = rotateBoard(gameBoard);

    }

    for (let row of gameBoard) {
        for (let col = 1; col < BOARD_SIZE; col++) {
            
            if(i=0){
                //logik
            }


            if(col + 1 >= BOARD_SIZE){
                row[col] = 0;
                //want to do this with push(0) instead
            }
            else if(row[col] === row[col+1]){
                row[col+1]*=2;
                row.push(0);
                
            }
        }
    }
    //rotate to original position
    for(let i = 0; i<BOARD_SIZE - numRotations;i++){
        gameBoard = rotateBoard(gameBoard);

    }



    return gameBoard;

}