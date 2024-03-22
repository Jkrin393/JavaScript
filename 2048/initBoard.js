const BOARD_SIZE = 4;
var gameBoard;
var i,j;

function initGameBoard(){
    gameBoard = [];
    for(i=0;i<BOARD_SIZE;i++){
        const newRow = [];
        for(j=0;j<BOARD_SIZE;j++){
            newRow[j] = 0;
        }
        gameBoard.push(newRow);
    }
    let num = 1;
    for(i=0;i<BOARD_SIZE;i++){
        
        for(j=0;j<BOARD_SIZE;j++){
            gameBoard[i][j] = num;    
            num++;
        }
    }
    //addTile();
    //addTile();
    return gameBoard;
    
}