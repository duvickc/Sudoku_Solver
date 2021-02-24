const testBoard = [
    [1,2,3,4,5,6,7,8,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
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
    This method will be the validator. It will check if a number is valid at any given position on the board.
 */
function isValid (gameBoard, value, positionArray) {
    const boardSize = gameBoard.length;

    //Checking if its valid given the row.
    //need to debug
    for (let index = 0; index < boardSize; index++) {
        console.log(`[${[positionArray[0]]}][${index}] = ` + (gameBoard[positionArray[0][index]]));
        if ((gameBoard[positionArray[0][index]] === value) && (index !== positionArray[1])) {
            return false;
        }
    }



    return true;
}
let array = [0,8]
isValid(testBoard, 8, array);