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

test('it returns an object with the correct \'original\' for tildes', (t, input) => {

    let output = strong(input);

    t.assert.equal(input, output.original);

}, [
    ['~~apples and oranges~~'],
    ['~~plain text here~~'],
    ['~~woop dee doo~~']
]);
