'use strict';

const simpleWebpage = require('..');
const assert = require('assert').strict;

assert.strictEqual(simpleWebpage(), 'Hello from simpleWebpage');
console.info('simpleWebpage tests passed');
