const student = require('../../basic/q2');
const { getRandomInt, inPlaceShuffleArray } = require('../helper');

describe('Q2 - SumBiggestAndSmallest', function () {
    test('0 and 10', function () {
        const smallest = 0;
        const biggest = 10;
        const count = 10;
        const arr = new Array(count).fill(0).map(() => getRandomInt(smallest + 1, biggest));
        arr.push(smallest);
        arr.push(biggest);
        inPlaceShuffleArray(arr);
        const answer = student.sumBiggestAndSmallest(arr);
        expect(answer).toEqual(smallest + biggest);
    });
    test('0 and >100', function () {
        const smallest = 0;
        const biggest = getRandomInt(100, 10000);
        const count = 10000;
        const arr = new Array(count).fill(0).map(() => getRandomInt(smallest + 1, biggest));
        arr.push(smallest);
        arr.push(biggest);
        inPlaceShuffleArray(arr);
        const answer = student.sumBiggestAndSmallest(arr);
        expect(answer).toEqual(smallest + biggest);
    }, 100);
    test('>100 and >100000', function () {
        const smallest = getRandomInt(100, 10000);
        const biggest = getRandomInt(10000, 10000000);
        const count = 100000;
        const arr = new Array(count).fill(0).map(() => getRandomInt(smallest + 1, biggest));
        arr.push(smallest);
        arr.push(biggest);
        inPlaceShuffleArray(arr);
        const answer = student.sumBiggestAndSmallest(arr);
        expect(answer).toEqual(smallest + biggest);
    }, 100);
});
