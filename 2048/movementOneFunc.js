/*function to move all tiles based on direction. takes movement vector as input split into x/y variables. Keypressed represents the actual key, direction is the row/col change from keyMap
logic: so as not to lose the date in the final portion of the array, right and down need to start with the in highest the largest row/col respectively 
left/up: row= 0, col = 0
down: row = 3, col = 0
right: row = 0, col = 0 

     1  2  3  4
A   [0, 0, 0, 0]
B   [0, 0, 2, 0]
C   [0, 0, 0, 0]
D   [0, 0, 0, 0]
ref: B3 - arr[1][2] == 2
*/

//******iteration/idea 2) use temporary gameboard to create new gameboard

/*function handleKeyPress(event){
    
    direction = keyMap[event.key];
    moveAllTiles(event.key, direction);
}*/
/*START OF FUNCTIONAL CODE */

//check if new location is inside the board
//invalid cases - new position is not empty, new position is out of bounds, new position is current position 
function isInBounds(currRow, currCol, newRow, newCol, tempGrid) {


    let rowInBounds = currRow >= 0 && currRow < BOARD_SIZE;
    let colInBounds =  currCol >= 0 && currCol < BOARD_SIZE;
    let notSelf =  !(currRow === newRow && currCol === newCol);
    let isEmpty =  tempGrid[newRow][newCol] === 0;


    //return  true when the row and col are in the grid, the new cell is not the current, and the new cell is available
    return (rowInBounds && colInBounds) && (notSelf) && (isEmpty);

}


//need to take in gameBoard - old parameters func moveAllTilesDepricated(keyPressed, direction)
function moveAllTilesOne(direction, gameBoard){

    var newBoard = new Array();
    var numRows = gameBoard.length;
    var numCols = gameBoard[0].length;
    var rowMoveDirection = inputKeyMap[direction].rowChange;
    var colMoveDirection = inputKeyMap[direction].colChange;


    //create empty temp arr
    for(let i = 0;i<numRows;i++){
      newBoard.push(Array(numCols).fill(0)); // push() returns array length, not array itself
    }
    
    for(let gridRow = 0; gridRow < numRows; gridRow++) {
        for(let gridCol = 0; gridCol < numCols; gridCol++) {
            let currTile = gameBoard[gridRow][gridCol];
            if(currTile !== 0) {
                let newTileRow = gridRow;
                let newTileCol = gridCol;

                if (isInBounds(gridRow,gridCol,newTileRow+rowMoveDirection,newTileCol+colMoveDirection, newBoard)) {
                    newTileRow += rowMoveDirection;
                    newTileCol += colMoveDirection;
                    newBoard[newTileRow][newTileCol] = currTile;
                }
                //newBoard[gridRow][gridCol] = 0;


            }
        }
    }
    addTile(newBoard);

    return newBoard;
   
}