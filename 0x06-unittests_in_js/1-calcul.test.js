

describe('calculateNumber', () => {
    describe('type == "SUM"', () => {
      it('equal positive numbers', () => {
        assert.strictEqual(calculateNumber('SUM', 2.0, 2.0), 4);
      });
  
      it('equal positive numbers (alternate)', () => {
        assert.strictEqual(calculateNumber('SUM', 2.3, 1.8), 4);
      });
  
      it('equal negative numbers', () => {
        assert.strictEqual(calculateNumber('SUM', -2.0, -2.0), -4);
      });
  
      it('equal negative numbers (alternate)', () => {
        assert.strictEqual(calculateNumber('SUM', -2.3, -1.8), -4);
      });
  
      it('negative and positive numbers', () => {
        assert.strictEqual(calculateNumber('SUM', -2.0, 2.0), 0);
      });
  
      it('positive and negative numbers', () => {
        assert.strictEqual(calculateNumber('SUM', 2.0, -2.0), 0);
      });
  
      it('0 and 0', () => {
        assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
      });
    });
  
    describe('type == "SUBTRACT"', () => {
      it('equal positive numbers', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 2.0), 0);
      });
  
      it('equal positive numbers (alternate)', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 1.8), 0);
      });
  
      it('equal negative numbers', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', -2.0, -2.0), 0);
      });
  
      it('equal negative numbers (alternate)', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', -2.3, -1.8), 0);
      });
  
      it('negative and positive numbers', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', -2.0, 2.0), -4.0);
      });
  
      it('positive and negative numbers', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 2.0, -2.0), 4.0);
      });
  
      it('0 and 0', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
      });
    });
  
    describe('type == "DIVIDE"', () => {
      it('positive numbers', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 8.0, 2.0), 4.0);
      });
  
      it('numbers with different signs', () => {
        assert.strictEqual(calculateNumber('DIVIDE', -7.0, 2.0), -3.5);
      });
  
      it('numbers with different signs (alternate)', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 7.0, -2.0), -3.5);
      });
  
      it('negative numbers', () => {
        assert.strictEqual(calculateNumber('DIVIDE', -7.0, -2.0), 3.5);
      });
  
      it('equal positive numbers', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 2.0, 2.0), 1);
      });
  
      it('equal negative numbers', () => {
        assert.strictEqual(calculateNumber('DIVIDE', -2.0, -2.0), 1);
      });
  
      it('equal rounded up numbers', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 2.6, 3.0), 1);
      });
  
      it('equal rounded down numbers', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 2.4, 2.0), 1);
      });
  
      it('0 and positive number', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 0.0, 5.0), 0);
      });
  
      it('0 and negative number', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 0.0, -5.0), -0);
      });
  
      it('positive number and 0', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0), 'Error');
      });
  
      it('positive number and number rounded down to 0', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.2), 'Error');
      });
  
      it('positive number and number rounded up to 0', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 5.0, -0.2), 'Error');
      });
  
      it('negative number and 0', () => {
        assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0), 'Error');
      });
  
      it('negative number and number rounded down to zero', () => {
        assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0.2), 'Error');
      });
  
      it('negative number and number rounded up to zero', () => {
        assert.strictEqual(calculateNumber('DIVIDE', -5.0, -0.2), 'Error');
      });
  
      it('0 and 0', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
      });
    });
  });
  const assert = require('assert');
  const calculateNumber = require('./0-calcul');
  
  describe('calculateNumber', () => {
    describe('type == "SUM"', () => {
      it('should return the sum of two positive numbers', () => {
        assert.strictEqual(calculateNumber('SUM', 2.0, 2.0), 4);
      });
  
      it('should return the sum of two positive numbers (alternate)', () => {
        assert.strictEqual(calculateNumber('SUM', 2.3, 1.8), 4);
      });
  
      it('should return the sum of two negative numbers', () => {
        assert.strictEqual(calculateNumber('SUM', -2.0, -2.0), -4);
      });
  
      it('should return the sum of two negative numbers (alternate)', () => {
        assert.strictEqual(calculateNumber('SUM', -2.3, -1.8), -4);
      });
  
      it('should return 0 when adding a negative and positive number', () => {
        assert.strictEqual(calculateNumber('SUM', -2.0, 2.0), 0);
      });
  
      it('should return 0 when adding a positive and negative number', () => {
        assert.strictEqual(calculateNumber('SUM', 2.0, -2.0), 0);
      });
  
      it('should return 0 when adding 0 and 0', () => {
        assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
      });
    });
  
    describe('type == "SUBTRACT"', () => {
      it('should return 0 when subtracting two equal positive numbers', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 2.0), 0);
      });
  
      it('should return 0 when subtracting two equal positive numbers (alternate)', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 1.8), 0);
      });
  
      it('should return 0 when subtracting two equal negative numbers', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', -2.0, -2.0), 0);
      });
  
      it('should return 0 when subtracting two equal negative numbers (alternate)', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', -2.3, -1.8), 0);
      });
  
      it('should return the correct result when subtracting a negative and positive number', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', -2.0, 2.0), -4.0);
      });
  
      it('should return the correct result when subtracting a positive and negative number', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 2.0, -2.0), 4.0);
      });
  
      it('should return 0 when subtracting 0 and 0', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
      });
    });
  
    describe('type == "DIVIDE"', () => {
      it('should return the correct result when dividing two positive numbers', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 8.0, 2.0), 4.0);
      });
  
      it('should return the correct result when dividing numbers with different signs', () => {
        assert.strictEqual(calculateNumber('DIVIDE', -7.0, 2.0), -3.5);
      });
  
      it('should return the correct result when dividing numbers with different signs (alternate)', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 7.0, -2.0), -3.5);
      });
  
      it('should return the correct result when dividing two negative numbers', () => {
        assert.strictEqual(calculateNumber('DIVIDE', -7.0, -2.0), 3.5);
      });
  
      it('should return 1 when dividing two equal positive numbers', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 2.0, 2.0), 1);
      });
  
      it('should return 1 when dividing two equal negative numbers', () => {
        assert.strictEqual(calculateNumber('DIVIDE', -2.0, -2.0), 1);
      });
  
      it('should return 1 when dividing two rounded up numbers', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 2.6, 3.0), 1);
      });
  
      it('should return 1 when dividing two rounded down numbers', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 2.4, 2.0), 1);
      });
  
      it('should return 0 when dividing 0 and a positive number', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 0.0, 5.0), 0);
      });
  
      it('should return 0 when dividing 0 and a negative number', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 0.0, -5.0), -0);
      });
  
      it('should return "Error" when dividing a positive number by 0', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0), 'Error');
      });
  
      it('should return "Error" when dividing a positive number by a number rounded down to 0', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.2), 'Error');
      });
  
      it('should return "Error" when dividing a positive number by a number rounded up to 0', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 5.0, -0.2), 'Error');
      });
  
      it('should return "Error" when dividing a negative number by 0', () => {
        assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0), 'Error');
      });
  
      it('should return "Error" when dividing a negative number by a number rounded down to zero', () => {
        assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0.2), 'Error');
      });
  
      it('should return "Error" when dividing a negative number by a number rounded up to zero', () => {
        assert.strictEqual(calculateNumber('DIVIDE', -5.0, -0.2), 'Error');
      });
  
      it('should return "Error" when dividing 0 and 0', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
      });
    });
  });
  