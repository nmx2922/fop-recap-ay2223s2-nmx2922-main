const student = require('../../basic/q4');
const { getRandomInt, inPlaceShuffleArray, getRandomArrayWithoutSomeNumbers } = require('../helper');

describe('Q4 - findDuplicates', function () {
    test('1 - 12', function () {
        const duplicates = [1, 5, 9, 11];
        const left = [2, 4, 6, 8];
        const right = [3, 7, 10, 12];
        const xs = [...left, ...duplicates];
        const ys = [...right, ...duplicates];
        inPlaceShuffleArray(xs);
        inPlaceShuffleArray(ys);
        const answer = student.findDuplicate(xs, ys);
        duplicates.sort((a, b) => a - b);
        answer.sort((a, b) => a - b);
        expect(answer).toEqual(duplicates);
    });
    test('1 - 1000000', function () {
        const count = 10000;
        const max = 1000000;
        let duplicates = new Array(count).fill(0).map(() => getRandomInt(0, max));
        const duplicateSet = new Set(duplicates);
        duplicates = [...duplicateSet];

        const left = getRandomArrayWithoutSomeNumbers(count, max, duplicateSet);
        const right = getRandomArrayWithoutSomeNumbers(count, max, new Set([...left, ...duplicateSet]));

        const xs = [...left, ...duplicates];
        const ys = [...right, ...duplicates];
        inPlaceShuffleArray(xs);
        inPlaceShuffleArray(ys);
        const answer = student.findDuplicate(xs, ys);

        duplicates.sort((a, b) => a - b);
        answer.sort((a, b) => a - b);

        expect(answer).toEqual(duplicates);
    });
});
