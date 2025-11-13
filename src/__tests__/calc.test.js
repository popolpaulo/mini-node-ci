import { calc } from '../calc.js';

describe('calc', () => {
  test('add/sub/mul work', () => {
    expect(calc.add(1, 2)).toBe(3);      // 1 + 2 = 3
    expect(calc.sub(5, 2)).toBe(3);      // 5 - 2 = 3
    expect(calc.mul(3, 4)).toBe(12);     // 3 * 4 = 12
  });

  test('div works', () => {
    expect(calc.div(8, 2)).toBe(4);      // 8 / 2 = 4
  });

  test('div by zero throws', () => {
    expect(() => calc.div(1, 0)).toThrow(RangeError);
    // (optionnel mais propre) : vérifier aussi le message
    // expect(() => calc.div(1, 0)).toThrow('Division by zero');
  });
});