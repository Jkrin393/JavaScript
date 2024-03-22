
function displayGameBoard(gameBoard){
    //clear previous contents of game div
    //document.getElementById('game').innerHTML = '';

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