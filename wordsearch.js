// pair programming by: @frameDoubt / @Sirrom84 / @natalidavid

const wordSearch = (letters, word) => {
    const transpose = function (matrix) {
        let outerArray = [];
        for (let i = 0; i < matrix[i].length; i++) {
            let innerArray = [];
            for (let j = 0; j < matrix.length; j++) {
                innerArray.push(matrix[j][i]);
            }
            outerArray.push(innerArray);
        }
        return outerArray;
    };
    //use the transpose function form the previous exercise and modify it to get vertical values
    const transposedMatrix = transpose(letters);
    const verticalJoin = transposedMatrix.map(ls => ls.join(''));
    for (let l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (let l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    return false;
};

module.exports = wordSearch;
