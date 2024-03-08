//logic to recreate the game "2048"
//var: reusable, let = one assignment

const BOARD_SIZE = 4;
let gameBoard;
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
  //  for(i=0;i<BOARD_SIZE;i++){
  //      for(j=0;j<BOARD_SIZE;j++){
  //          console.log(gameBoard[i][j])
  //      }
  //
  //}
    
}
function displayGameBoard(gameBoard){

    let gameDiv = document.getElementById('game');
    
    let table = document.createElement('table');

    for(i = 0;i<gameBoard.length;i++){
        let currRow = document.createElement('tr');//table row
        for(j=0;j<gameBoard[i].length;j++){
            let currTile = document.createElement('td');//table data point
            currTile.textContent = gameBoard[i][j];
            currRow.appendChild(currTile); //add the current cell to the DOM as a child of row
        }
        table.appendChild(currRow); //add current row as a child of table
    }
    gameDiv.appendChild(table);//last step, append table as a child of the game div

}

//add either a two or a four to a random open spot in the board. Logic: create a list of empty cell's coordiantes, then randomize which one is chosen
function addTile(){
    var emptyCellList = [];
    //add empty cell address as tuple to the list
    for(i = 0;i<gameBoard.length;i++){
        for(j=0;j<gameBoard[i].length;j++){
            if(gameBoard[i][j] == 0){
               emptyCellList.push({xCoord:i,yCoord:j}); // creates an object with 2 data points, each with a defined property name(think a struct int xCoord, int yCoord.)
            }
        }
    }
    /*for(i = 0;i<emptyCellList.length;i++){
       console.log(emptyCellList[i]);
    }*/


    //select a cell
    var randCell;
    if(emptyCellList.length > 0){
        randCell = Math.floor(Math.random() * emptyCellList.length);
    }
    else{
        console.log("game over");
    }

    //select a value 
    var randSeed = Math.random();
    emptyCellValue = randSeed < .6 ? 2:4; 

    //put it all together. pull the x,y tuple values from the emptyCellList, assign them to the x/y coords from the game grid, then add the value
    const {xCoord, yCoord} = emptyCellList[randCell];
    gameBoard[xCoord][yCoord] = emptyCellValue;


}


var direction;

/*const keyMap = {
    ArrowUp: {xMove: 0, yMove: -1},
    ArrowDown: {xMove: 0, yMove: 1},
    ArrowLeft: {xMove: -1, yMove: 0},
    ArrowRight: {xMove: 1, yMove: 0},
};*/
const keyMap = {
    ArrowUp: {xMove: -1, yMove: 0},
    ArrowDown: {xMove: 1, yMove: 0},
    ArrowLeft: {xMove: 0, yMove: -1},
    ArrowRight: {xMove: 0, yMove: 1},
};
//function to interpret keyboard input logic: create a map for arrow buttons,  assign to a direction variable and passed to moveTiles()
function handleKeyPress(event){
    
    direction = keyMap[event.key];
    console.log(direction.xMove, direction.yMove);
    moveAllTiles(direction.xMove, direction.yMove);

}
//check if new location is inside the board
function isValidPosition(row, col) {
    return row >= 0 && row < BOARD_SIZE && col >= 0 && col < BOARD_SIZE;
}

//function to move all tiles based on direction. takes movement vector as input split into x/y variables.
function moveAllTiles(rowMove, colMove){
    let row, col;
    
    let startingRow =0, startingCol = 0; // if row movement is 1(down) start at last row
    if (rowMove > 0)
        startingRow = BOARD_SIZE - 1;
    if (colMove < 0)
        startingCol = BOARD_SIZE - 1;

    //console.log(startingRow,startingCol);


    for(row=0;row<BOARD_SIZE;row++){
 
        //inner loop to move each cell to new coordinates
        for(col=0;col<BOARD_SIZE;col++){
            moveTile(row,col, row+rowMove, col+colMove);
        }
    }
    displayGameBoard(gameBoard);
}

//get coordinates of new cell, swap values
function moveTile(row, col, newRow, newCol){
    const currVal = gameBoard[row][col];

    gameBoard[row][col] = 0;
    if(isValidPosition(newRow,newCol)){
       gameBoard[newRow][newCol] = currVal;
    }
    else{
        console.error("print out of bounds");
    }
    
}

function startGame(){
    document.getElementById('game').innerHTML = '';

    initGameBoard();
    addTile();
    addTile();
    displayGameBoard(gameBoard);
}


//listeners for user input
document.getElementById('start').addEventListener('click', startGame); //listen for click button id "start"
document.addEventListener('keydown', handleKeyPress); //listen for arrow press
