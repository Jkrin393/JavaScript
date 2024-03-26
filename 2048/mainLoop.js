//code to recreate the game "2048"

//listener start game button press
document.getElementById('start').addEventListener('click', startGame); //listen for click button id "start"
var gameBoard;

function startGame(){
    document.getElementById('game').innerHTML = '';

    gameBoard = initGameBoard();
    displayGameBoard(gameBoard);
}


document.addEventListener('keydown', handleKeyPress); //listen for arrow press

function handleKeyPress(event){


    //gameBoard = moveAllTilesOne(event.key, gameBoard);
    //gameBoard = moveAllTiles(event.key, gameBoard);
    
    gameBoard = moveAndMerge(event.key, gameBoard);
    addTile(gameBoard);
    displayGameBoard(gameBoard);

}

