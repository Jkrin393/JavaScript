//check if new location is inside the board
function isValidPosition(row, col) {
    return row >= 0 && row < BOARD_SIZE && col >= 0 && col < BOARD_SIZE;
}

function moveLeft(gameboard){
    for (let row of gameboard) {
        for (let i = 0; i < row.length; i++) {
            if(i == 0){
                row[i] = row[i] + row[i+1]
            }
            else if (i + 1 >= row.length) {
                row[i] = 0;
            } else {
                row[i] = row[i + 1];
            }
        }
    }
}

function moveRight(gameboard) {
    for (let row = 0; row < gameboard.length; row++) {
        for (let i = gameboard[row].length - 1; i > 0; i--) {
            if(i == gameboard[row].length-1){
                gameboard[row][i]+=gameboard[row][i - 1]
            }
            else
                gameboard[row][i] = gameboard[row][i - 1];
        }
        gameboard[row][0] = 0;
    }
}

function moveUp(gameboard) {
    for (let col = 0; col < gameboard[0].length; col++) {
        for (let row = 0; row < gameboard.length - 1; row++) {
            if(row ==0){
                gameboard[row][col] += gameboard[row + 1][col];
            }
            else
                gameboard[row][col] = gameboard[row + 1][col];
        }
        gameboard[gameboard.length - 1][col] = 0;
    }
}

function moveDown(gameboard) {
    for (let col = 0; col < gameboard[0].length; col++) {
        for (let row = gameboard.length - 1; row > 0; row--) {
            if(row == gameboard.length - 1)
                gameboard[row][col] += gameboard[row - 1][col];
            else
                gameboard[row][col] = gameboard[row - 1][col];
        }
        gameboard[0][col] = 0;
    }
}


function moveAllTiles(keyPressed, gameBoard){
    
    switch (keyPressed) {
        case `ArrowLeft`:
            moveLeft(gameBoard);
            break;
        case `ArrowRight`:
            moveRight(gameBoard);
            break;        
        case `ArrowUp`:
            moveUp(gameBoard);
            break;
        case `ArrowDown`:
            moveDown(gameBoard);
            break;        
        default:
            console.log("not recognized");
            break;
    }
        

}



