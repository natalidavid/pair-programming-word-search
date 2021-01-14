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
    const transposedMatrix = transpose(letters);
    // console.log(transposedMatrix);
    const verticalJoin = transposedMatrix.map(ls => ls.join(''));
    // console.log(verticalJoin);
    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true
        }
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    // console.log(horizontalJoin);
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    return false;
}

module.exports = wordSearch;
