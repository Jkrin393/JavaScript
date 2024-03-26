const BOARD_SIZE = 4;

var i,j;

function initGameBoard(){
    let gameBoard = [];
    for(i=0;i<BOARD_SIZE;i++){
        const newRow = [];
        for(j=0;j<BOARD_SIZE;j++){
            newRow[j] = 0;
        }
        gameBoard.push(newRow);
    }
    let num = 1;

    addTile(gameBoard);
    addTile(gameBoard);
    return gameBoard;
    
}