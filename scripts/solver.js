const testBoard = [
    [1,2,3,4,5,6,7,8,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]
]

/*
    This method gets the input values from the DOM and turns it into a array.
    The game board is represented as a 2D Array
    here is an example:
    [
        [1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 3, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 4, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 5, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 6, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 7, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 8, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 9]
    ]
 */
function getGameBoard() {
    const inputs = document.querySelectorAll("input");
    const board = [];
    let row = [];
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            row.push(0); // Zero indicates an empty spot on the board.
        } else {
            row.push(parseInt(inputs[i].value));
        }
        if (((row.length % 9) === 0) && (i !== 0)) {
            board.push(row);
            row = [];
        }
    }
    return board;
}

/*
    This method is the validator. It will check if a number is valid at any given position on the board.
 */
function isValid (gameBoard, value, positionArray) {
    const boardSize = gameBoard.length;

    //Checking if it's valid given the row.
    for (let index = 0; index < boardSize; index++) {
        if ((gameBoard[positionArray[0]][index] === value) && (index !== positionArray[1])) {
            return false;
        }
    }

    //Checking if it's valid given the column.
    for (let index = 0; index < boardSize; index++) {
        if ((gameBoard[index][positionArray[1]] === value) && (index !== positionArray[0])) {
            return false;
        }
    }

    //Checking the 3x3 grid
    const gridPositionX = Math.floor(positionArray[0]/3);
    const gridPositionY = Math.floor(positionArray[1]/3);
    for (let row = (gridPositionX * 3); row < (gridPositionX * 3) + 3; row++) {
        for (let column = (gridPositionY * 3); column < (gridPositionY * 3) + 3; column++) {
            if ((gameBoard[row][column] === value) && (row !== positionArray[0]) && (column !== positionArray[1])) {
                return false;
            }
        }
    }

    return true;
}