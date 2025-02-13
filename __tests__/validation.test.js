import { validateCarNames } from '../src/validation';

describe('validateCarNames', () => {
  test('should throw an error if any car name is an empty string', () => {
    expect(() => validateCarNames(['jinju', '', 'grace'])).toThrow(
      '자동차 이름은 빈 문자열일 수 없습니다.'
    );
  });

  test('should throw an error if any car name exceeds 5 characters', () => {
    expect(() => validateCarNames(['jinju', 'jinjugrace', 'grace'])).toThrow(
      '자동차 이름은 5자 이하여야 합니다.'
    );
  });

  test('should throw an error if there are duplicate car names', () => {
    expect(() => validateCarNames(['jinju', 'jinju', 'grace'])).toThrow(
      '자동차 이름은 중복되지 않아야 합니다.'
    );
  });
});
