const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('adds two numbers (positive integers)', () => {
    assert.strictEqual(calculateNumber(2.0, 2.0), 4);
  });
  
  it('adds two numbers (positive decimals)', () => {
    assert.strictEqual(calculateNumber(2.3, 1.8), 4);
  });
  it('adds two numbers (negative integers)', () => {
    assert.strictEqual(calculateNumber(-2.0, -2.0), -4);
  });
  it('adds two numbers (negative and positive)', () => {
    assert.strictEqual(calculateNumber(-2.0, 2.0), 0);
  });
});
