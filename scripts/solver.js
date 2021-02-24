/*
    The game board is represented as a 2D Array
    here is an example

        [1, 0, 0, 0, 0, 0, 0, 0, 0]
        [0, 2, 0, 0, 0, 0, 0, 0, 0]
        [0, 0, 3, 0, 0, 0, 0, 0, 0]
        [0, 0, 0, 4, 0, 0, 0, 0, 0]
        [0, 0, 0, 0, 5, 0, 0, 0, 0]
        [0, 0, 0, 0, 0, 6, 0, 0, 0]
        [0, 0, 0, 0, 0, 0, 7, 0, 0]
        [0, 0, 0, 0, 0, 0, 0, 8, 0]
        [0, 0, 0, 0, 0, 0, 0, 0, 9]
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
