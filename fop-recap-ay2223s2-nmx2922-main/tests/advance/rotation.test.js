const student = require('../../advance/rotation');
const { getRandomArrayWithoutSomeNumbers } = require('../helper');

describe('rotation', function () {
    test('example 1', function () {
        const arr = [1, 2, 3];
        const n = 1;
        const result = [2, 3, 1];
        const actual = student.rotation(arr, n);
        expect(actual).toEqual(result);
    });

    test('example 2', function () {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const n = 4;
        const result = [5, 6, 7, 8, 9, 1, 2, 3, 4];
        const actual = student.rotation(arr, n);
        expect(actual).toEqual(result);
    });

    test('n > arr.length', function () {
        const randomArr = getRandomArrayWithoutSomeNumbers(20, 50, new Set());
        const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((v) => randomArr[v]);
        const n = arr.length + 5;
        const result = [5, 6, 7, 8, 9, 0, 1, 2, 3, 4].map((v) => randomArr[v]);
        const actual = student.rotation(arr, n);
        expect(actual).toEqual(result);
    });

    test('n > 5 * arr.length', function () {
        const randomArr = getRandomArrayWithoutSomeNumbers(20, 50, new Set());
        const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((v) => randomArr[v]);
        const n = arr.length * 5 + 6;
        const result = [6, 7, 8, 9, 0, 1, 2, 3, 4, 5].map((v) => randomArr[v]);
        const actual = student.rotation(arr, n);
        expect(actual).toEqual(result);
    });
});
