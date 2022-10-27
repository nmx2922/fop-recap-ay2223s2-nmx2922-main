const student = require('../../advance/cheapest-route');
const { inPlaceShuffleArray, getRandomArrayWithoutSomeNumbers, getRandomInt } = require('../helper');
const fs = require('fs');

const table = [];

beforeAll(() => {});

describe('cheapest route', function () {
    const files = [];
    for (let i = 0; i < 10; i++) {
        files.push(fs.readFileSync(`./tests/advance/cheapest-route/${i + 1}.in.json`));
        files.push(fs.readFileSync(`./tests/advance/cheapest-route/${i + 1}.out.json`));
    }
    for (let i = 0; i < files.length; i += 2) {
        const input = JSON.parse(files[i]);
        const output = JSON.parse(files[i + 1]);
        const [tc, routes, erpCosts] = [i / 2 + 1, ...input];
        test(`cheapest route ${tc}`, function () {
            const actual = student.cheapestRoute(routes, erpCosts);
            expect(actual).toEqual(output);
        });
    }
});
