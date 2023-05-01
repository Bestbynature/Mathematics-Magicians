import operate from '../logic/operate';

describe('operate', () => {
  test('should return the sum of two numbers', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  test('should return the difference of two numbers', () => {
    expect(operate(1, 2, '-')).toBe('-1');
  });

  test('should return the product of two numbers', () => {
    expect(operate(1, 2, 'x')).toBe('2');
  });

  test('should return the quotient of two numbers', () => {
    expect(operate(1, 2, '÷')).toBe('0.5');
  });

  test('should return the modulo of two numbers', () => {
    expect(operate(1, 2, '%')).toBe('1');
  });

  test('should throw an error if the operation is unknown', () => {
    expect(() => operate(1, 2, 'unknown')).toThrowError("Unknown operation 'unknown'");
  });

  test('should throw an error if the divisor is 0', () => {
    expect(operate(1, 0, '÷')).toBe("Can't divide by 0.");
  });

  test('should throw an error if the divisor is 0', () => {
    expect(operate(1, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});
