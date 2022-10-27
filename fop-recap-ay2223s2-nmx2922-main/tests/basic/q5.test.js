const student = require('../../basic/q5');
const { getRandomInt, inPlaceShuffleArray } = require('../helper');

describe('Q5 - Wrong Password', function () {
    test('Sample', function () {
        const attempts = [
            ['a', 'b'],
            ['c', 'd'],
            ['e', 'f'],
        ];
        const passwords = { a: 'b', c: 'c', e: 'e' };
        const answer = student.wrongPassword(attempts, passwords);
        expect(answer.sort()).toEqual(['c', 'e'].sort());
    });
    test('All correct', function () {
        const attempts = 'abcdefghijklmnopqrstuvwxyz'.split('').map((c, idx) => [c, `${c}${idx}`]);
        inPlaceShuffleArray(attempts);
        const passwords = {};
        attempts.forEach(([un, pw]) => (passwords[un] = pw));
        const answer = student.wrongPassword(attempts, passwords);
        expect(answer.sort()).toEqual([]);
    });
    test('All wrong', function () {
        const attempts = 'abcdefghijklmnopqrstuvwxyz'.split('').map((c, idx) => [c, `${c}${idx}`]);
        inPlaceShuffleArray(attempts);
        const passwords = {};
        attempts.forEach(([un, pw]) => (passwords[un] = `${pw}11`));
        const answer = student.wrongPassword(attempts, passwords);
        expect(answer.sort()).toEqual(attempts.map(([un]) => un).sort());
    });
    test('50%', function () {
        const attempts = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
            .split('')
            .map((c, idx) => [c, `${c}${idx}`]);
        inPlaceShuffleArray(attempts);
        const passwords = {};
        const wrongAttempts = [];
        attempts.forEach(([un, pw]) => {
            const isWrong = getRandomInt(0, 100) % 2;
            if (isWrong) {
                wrongAttempts.push(un);
                passwords[un] = `${pw}11`;
            } else {
                passwords[un] = pw;
            }
        });
        const answer = student.wrongPassword(attempts, passwords);
        expect(answer.sort()).toEqual(wrongAttempts.sort());
    });
});
