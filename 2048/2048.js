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
    for(i = 0;i<emptyCellList.length;i++){
       console.log(emptyCellList[i]);
    }


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

function handleInput(){

}

function startGame(){
    document.getElementById('game').innerHTML = '';

    initGameBoard();
    addTile();
    addTile();
    displayGameBoard(gameBoard)
}


//listen for start button click, then run startGame()
document.getElementById('start').addEventListener('click', startGame);
