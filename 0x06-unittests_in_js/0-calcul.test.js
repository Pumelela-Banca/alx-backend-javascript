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
  it('adds two floats (negative and positive)', () => {
    assert.strictEqual(calculateNumber(-2.0, 2.0), 0);
    assert.strictEqual(calculateNumber(1, 3.8), 5);
    assert.strictEqual(calculateNumber(2.5, 4.6), 8);
    assert.strictEqual(calculateNumber(-5.9, -6), -12);
  });

  it('should check arguments',  () => {
    assert.strictEqual(calculateNumber(), NaN);
    assert.strictEqual(calculateNumber(3), NaN);
  });
});
