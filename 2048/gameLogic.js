//add either a two or a four to a random open spot in the board. Logic: create a list of empty cell's coordiantes, then randomize which one is chosen

function addTile(){
    var emptyCellList = [];
    //add empty cell address to list
    for(i = 0;i<gameBoard.length;i++){
        for(j=0;j<gameBoard[i].length;j++){
            if(gameBoard[i][j] == 0){
               emptyCellList.push({xCoord:i,yCoord:j}); // creates an object with 2 data points, each with a defined property name (struct{ int xCoord, int yCoord} )
            }
        }
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

