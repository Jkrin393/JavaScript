//new idea, all tile moves are a left move, rotate grid to allow this. Don't need to worry about out of bounds conditions


function filterZeros(row){
    
    
    let filteredRow = row.filter(val => val !==0);
    let emptyValueCount = BOARD_SIZE - filteredRow.length;

    while(BOARD_SIZE - emptyValueCount !== BOARD_SIZE){
        filteredRow.push(0);
        emptyValueCount = BOARD_SIZE - filteredRow.length;
    }

    return filteredRow;
}

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
    
    for(let col = 0;col < BOARD_SIZE;col++){
        if(row[col] === row[col+1] && row[col] !==0){//need to consider endless zero + zero case
            row[col] *= 2;
            row[col+1] = 0;
        }
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
    //this loop simulates the sliding movement across multilple cells. logic: filter out the zero values and create a new arr, push(0) each time a zero value is found
    for (let i = 0;i<BOARD_SIZE; i++) {
        let row = gameBoard[i];
        //row = row.filter(val => val !==0);
        row  = filterZeros(row);
        row = mergeRow(row);
        row = filterZeros(row);

        gameBoard[i] = row;
    }

    //add any valid matching tiles in the row 
    for(let i = 0; i<BOARD_SIZE;i++){
        mergeRow(gameBoard[i]);

    }



    //rotate to original position
    for(let i = 0; i<BOARD_SIZE - numRotations;i++){
        gameBoard = rotateBoard(gameBoard);

    }



    return gameBoard;

}