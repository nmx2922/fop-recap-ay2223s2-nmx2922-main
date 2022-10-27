function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
module.exports.getRandomInt = getRandomInt;

module.exports.inPlaceShuffleArray = function inPlaceShuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};

module.exports.getRandomArrayWithoutSomeNumbers = function getRandomArrayWithoutSomeNumbers(
    count,
    max,
    exclude = new Set(),
) {
    const arr = [];
    while (arr.length < count) {
        const x = getRandomInt(0, max);
        if (!exclude.has(x)) arr.push(x);
    }
    return arr;
};
