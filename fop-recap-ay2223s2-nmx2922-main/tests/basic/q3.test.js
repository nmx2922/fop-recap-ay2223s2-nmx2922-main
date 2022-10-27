const student = require('../../basic/q3');
const { getRandomInt, inPlaceShuffleArray } = require('../helper');

describe('Q3 - countCharacter', function () {
    test('a-d', function () {
        const count = { a: 1, b: 2, c: 3, d: 4 };
        const arr = [];
        Object.entries(count).forEach(([key, value]) => {
            for (let i = 0; i < value; i++) {
                arr.push(key);
            }
        });
        inPlaceShuffleArray(arr);
        const answer = student.countCharacter(arr);
        expect(answer).toEqual(count);
    });
    test('a-z', function () {
        const count = {};
        'abcdefghijklmnopqrstuvwxyz'.split('').forEach((c) => (count[c] = getRandomInt(1, 20)));
        const arr = [];
        Object.entries(count).forEach(([key, value]) => {
            for (let i = 0; i < value; i++) {
                arr.push(key);
            }
        });
        inPlaceShuffleArray(arr);
        const answer = student.countCharacter(arr);
        expect(answer).toEqual(count);
    });
    test('a-zA-Z', function () {
        const count = {};
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
            .split('')
            .forEach((c) => (count[c] = getRandomInt(1, 50)));
        const arr = [];
        Object.entries(count).forEach(([key, value]) => {
            for (let i = 0; i < value; i++) {
                arr.push(key);
            }
        });
        inPlaceShuffleArray(arr);
        const answer = student.countCharacter(arr);
        expect(answer).toEqual(count);
    });
});
