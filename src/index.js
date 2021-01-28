// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == undefined || matrix.length == 0) {
        return [];
    }
    let newArray = matrix.map((item, index) =>
        index & 1 ? item.reverse() : item
    );

    let result = newArray.reduce((acc, item) => acc.concat(item));
    return result;
};
