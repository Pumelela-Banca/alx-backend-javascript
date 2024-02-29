
describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('should return the sum of two positive numbers', () => {
      assert.strictEqual(calculateNumber(2.0, 2.0), 4);
    });

    it('should return the sum of two positive numbers (alternate)', () => {
      assert.strictEqual(calculateNumber(2.3, 1.8), 4);
    });

    it('should return the sum of two negative numbers', () => {
      assert.strictEqual(calculateNumber(-2.0, -2.0), -4);
    });

    it('should return the sum of two negative numbers (alternate)', () => {
      assert.strictEqual(calculateNumber(-2.3, -1.8), -4);
    });

    it('should return 0 when adding a negative and positive number', () => {
      assert.strictEqual(calculateNumber(-2.0, 2.0), 0);
    });

    it('should return 0 when adding a positive and negative number', () => {
      assert.strictEqual(calculateNumber(2.0, -2.0), 0);
    });

    it('should return 0 when adding 0 and 0', () => {
      assert.strictEqual(calculateNumber(0.0, 0.0), 0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('should return 0 when subtracting two equal positive numbers', () => {
      assert.strictEqual(calculateNumber(2.0, 2.0), 0);
    });

    it('should return 0 when subtracting two equal positive numbers (alternate)', () => {
      assert.strictEqual(calculateNumber(2.3, 1.8), 0);
    });

    it('should return 0 when subtracting two equal negative numbers', () => {
      assert.strictEqual(calculateNumber(-2.0, -2.0), 0);
    });

    it('should return 0 when subtracting two equal negative numbers (alternate)', () => {
      assert.strictEqual(calculateNumber(-2.3, -1.8), 0);
    });

    it('should return the correct result when subtracting a negative and positive number', () => {
      assert.strictEqual(calculateNumber(-2.0, 2.0), -4.0);
    });

    it('should return the correct result when subtracting a positive and negative number', () => {
      assert.strictEqual(calculateNumber(2.0, -2.0), 4.0);
    });

    it('should return 0 when subtracting 0 and 0', () => {
      assert.strictEqual(calculateNumber(0.0, 0.0), 0);
    });
  });
});
