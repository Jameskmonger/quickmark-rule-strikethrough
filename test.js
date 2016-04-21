'use strict';

const test = require('modunit');
const strikethrough = require('./index');

test('it returns undefined for plain text', (t, input) => {

    let output = strong(input);

    t.assert.equal(undefined, output);

}, [
    ['apples and oranges'],
    ['plain text here'],
    ['woop dee doo']
]);
