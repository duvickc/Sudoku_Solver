const testBoard = [
    [4, 7, 9, 6, 5, 1, 3, 2, 0],
    [0, 0, 3, 0, 4, 0, 9, 6, 0],
    [5, 2, 0, 0, 8, 9, 0, 1, 7],
    [0, 6, 1, 0, 7, 0, 5, 4, 0],
    [2, 9, 7, 4, 3, 0, 1, 8, 6],
    [0, 0, 5, 8, 1, 0, 0, 7, 0],
    [0, 3, 2, 1, 6, 0, 0, 0, 4],
    [0, 0, 8, 5, 0, 0, 0, 3, 2],
    [0, 0, 0, 0, 2, 3, 8, 9, 0]
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

function getEmptyPosition(gameBoard) {
    for (let row = 0; row < gameBoard.length; row++) {
        for (let column = 0; column < gameBoard[row].length; column++) {
            if (gameBoard[row][column] === 0) {
                return [row, column];
            }
        }
    }
    return null;
}


/*
    This method is the validator. It will check if a number is valid at any given position on the board.
 */
function isValid(gameBoard, value, positionArray) {
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
    const gridPositionX = Math.floor(positionArray[0] / 3);
    const gridPositionY = Math.floor(positionArray[1] / 3);
    for (let row = (gridPositionX * 3); row < (gridPositionX * 3) + 3; row++) {
        for (let column = (gridPositionY * 3); column < (gridPositionY * 3) + 3; column++) {
            if ((gameBoard[row][column] === value) && (row !== positionArray[0]) && (column !== positionArray[1])) {
                return false;
            }
        }
    }

    return true;
}

function solveGameBoard(gameBoard) {
    /*
        base case of the algorithm
        if there are no more empty spots left on the game board
        then it is solved.
     */
    let emptyPosition = getEmptyPosition(gameBoard);
    if (emptyPosition === null) {
        return true; //break out of recursion
    }

    for (let value = 1; value < 10; value++) {
        if (isValid(gameBoard, value, emptyPosition) === true) {
            gameBoard[emptyPosition[0]][emptyPosition[1]] = value;
            if (solveGameBoard(gameBoard) === true) {
                return true;
            }
            gameBoard[emptyPosition[0]][emptyPosition[1]] = 0;
        }
    }
    // console.dir(gameBoard)
    return gameBoard;
}