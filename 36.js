/**
 * @param {character[][]} board
 * @return {boolean}
 */



/**
 * @param {number} char
 * @return {boolean}
 */
const isValidChar = char => char >= '1' && char <= '9' || char === '.';

var dfs = [
    [1, -1],
    [1, 1],
    [1, 0],

    [-1, 1],
    [-1, -1],
    [-1, 0],

    [0, 1],
    [0, -1],
]

var checkRow = row => {
    const st = new Set();
    for (const cell of row) {
        if (!isValidChar(cell)) return false;
        if (cell !== '.') {
            if (st.has(cell)) return false;
            st.add(cell);
        }

    }
    return true;
};
var checkCol = (board, col) => {
    const st = new Set();
    for (let r = 0; r < 9; r++) {
        const cell = board[r][col]
        if (!isValidChar(cell)) return false;
        if (cell !== '.') {
            if (st.has(cell)) return false;
            st.add(cell);
        }

    }
    return true;
};
var checkSquare = (board, row, col) => {
    const st = new Set();
    for (let r = row; r < row + 3; r++) {
        for (let c = col; c < col + 3; c++) {
            const cell = board[r][c]
            if (!isValidChar(cell)) return false;
            if (cell !== '.') {
                if (st.has(cell)) return false;
                st.add(cell);
            }

        }
    }
    return true;
};


var isValidSudoku = function (board) {

    for (let r = 0; r < 9; r++) {
        if (!checkRow(board[r])) return false;

        for (let c = 0; c < 9; c++) {
            const cell = board[r][c]
            if (!checkCol(board, c)) return false;
            if (r % 3 === 0 && c % 3 === 0) {
                if (!checkSquare(board, r, c)) return false;
            }

        }
    }

    return true;

};

isValidSudoku([["8", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
)
