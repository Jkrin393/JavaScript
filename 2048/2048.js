//code to recreate the game "2048"

//listener start game button press
document.getElementById('start').addEventListener('click', startGame); //listen for click button id "start"


function startGame(){
    document.getElementById('game').innerHTML = '';

    const gameBoard = initGameBoard();
    //addTile();
    //addTile();
    displayGameBoard(gameBoard);
}


document.addEventListener('keydown', handleKeyPress); //listen for arrow press

var direction;
//dict to hold name of key pressed and directional change on the game grid 
//reversed values from first draft. Easier to think of the movement as increase/decrease in row/col than as the direction the cell needs to move on the grid
const keyMap = {
    ArrowUp: {rowChange: 1, colChange: 0},
    ArrowDown: {rowChange: -1, colChange: 0},
    ArrowLeft: {rowChange: 0, colChange: 1},
    ArrowRight: {rowChange: 0, colChange: -1},
};
function handleKeyPress(event){
    
    direction = keyMap[event.key];
    moveAllTiles(event.key, gameBoard);
    displayGameBoard(gameBoard);

}

