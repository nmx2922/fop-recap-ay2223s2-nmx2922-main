const student = require('../../basic/q1');
const { getRandomInt } = require('../helper');

describe('Q1 - Sum', function () {
    test('2 positive number', function () {
        const x = getRandomInt(0, 1000000);
        const y = getRandomInt(0, 1000000);
        const sum = student.sum(x, y);
        expect(sum).toEqual(x + y);
    });
    test('1 positive, 1 negative number', function () {
        const x = getRandomInt(0, 1000000);
        const y = -getRandomInt(0, 1000000);
        const sum = student.sum(x, y);
        expect(sum).toEqual(x + y);
    });
    test('2 negative number', function () {
        const x = -getRandomInt(0, 1000000);
        const y = -getRandomInt(0, 1000000);
        const sum = student.sum(x, y);
        expect(sum).toEqual(x + y);
    });
});
