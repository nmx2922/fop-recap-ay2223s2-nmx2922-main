const student = require('../../advance/rotation-2d');
const { getRandomInt, getRandomArrayWithoutSomeNumbers } = require('../helper');
describe('rotation', function () {
    test('example 1', function () {
        const arr = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        const n = 1;
        const result = [
            [4, 1, 2],
            [7, 5, 3],
            [8, 9, 6],
        ];
        const actual = student.rotation2d(arr, n);
        expect(actual).toEqual(result);
    });

    test('example 2', function () {
        const arr = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ];
        const n = 5;
        const result = [
            [15, 14, 13, 9],
            [16, 6, 7, 5],
            [12, 10, 11, 1],
            [8, 4, 3, 2],
        ];
        const actual = student.rotation2d(arr, n);
        expect(actual).toEqual(result);
    });

    test('Alternating', function () {
        const s = getRandomInt(3, 20);
        const arr = [
            [s, 0, s, 0, s, 0, s, 0],
            [0, s, 0, s, 0, s, 0, s],
            [s, 0, s, 0, s, 0, s, 0],
            [0, s, 0, s, 0, s, 0, s],
            [s, 0, s, 0, s, 0, s, 0],
            [0, s, 0, s, 0, s, 0, s],
            [s, 0, s, 0, s, 0, s, 0],
            [0, s, 0, s, 0, s, 0, s],
        ];
        const n = 2;
        const actual = student.rotation2d(arr, n);
        expect(actual).toEqual(arr);
    });

    test('m > 10', function () {
        const m = getRandomInt(11, 20);
        const arr = [];
        for (let i = 0; i < m; i++) {
            arr.push(getRandomArrayWithoutSomeNumbers(m, 1000));
        }
        const original = arr.map((x) => [...x]);

        const n1 = getRandomInt(4, 7);
        const result1 = student.rotation2d(arr, n1);
        expect(result1).not.toEqual(original);

        const n2 = getRandomInt(9, 12);
        const result2 = student.rotation2d(result1, n2);
        expect(result2).not.toEqual(original);
        expect(result2).not.toEqual(result1);

        const n3 = m * m - (m - 2) * (m - 2) - n1 - n2;
        const result = student.rotation2d(result2, n3);
        expect(result).toEqual(original);
    });
});
