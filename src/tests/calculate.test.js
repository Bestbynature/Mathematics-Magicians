import calculate from '../logic/calculate';

describe('calculate', () => {
  test('should return an object with total, next and operation', () => {
    expect(calculate({}, '5')).toHaveProperty('next', '5');
  });

  test('should return an object with total, next and operation', () => {
    expect(calculate({ next: '5' }, '5')).toHaveProperty('next', '55');
  });

  test('should return an object with total, next and operation', () => {
    expect(calculate({ next: '5' }, 'AC')).toHaveProperty('next', null);
  });

  test('should return an object with total, next and operation', () => {
    expect(calculate({ next: '5' }, '.')).toHaveProperty('next', '5.');
  });

  test('should return an object with total, next and operation', () => {
    expect(calculate({ next: '5.' }, '.')).toHaveProperty('next', '5.');
  });

  test('should return an object with total, next and operation', () => {
    expect(calculate({ next: '5' }, '+')).toHaveProperty('next', '5', 'operation', '+');
  });

  test('should return an object with total, next and operation', () => {
    expect(calculate({ next: '5' }, '-')).toHaveProperty('next', '5', 'operation', '-');
  });

  test('should return an object with total, next and operation', () => {
    expect(calculate({ next: '5' }, 'x')).toHaveProperty('next', '5', 'operation', 'x');
  });

  test('should return an object with total, next and operation', () => {
    expect(calculate({ next: '5' }, '÷')).toHaveProperty('next', '5', 'operation', '÷');
  });

  test('should return an object with total, next and operation', () => {
    expect(calculate({ next: '5', total: '5', operation: '+' }, '=')).toHaveProperty('total', '10', 'next', null, 'operation', null);
  });
});
