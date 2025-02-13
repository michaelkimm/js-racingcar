export function validateCarNames(carNames) {
  if (carNames.some((name) => name === '')) {
    throw new Error('자동차 이름은 빈 문자열일 수 없습니다.');
  }

  if (carNames.some((name) => name.length > 5)) {
    throw new Error('자동차 이름은 5자 이하여야 합니다.');
  }

  const carNamesSet = new Set(carNames);
  if (carNamesSet.size !== carNames.length) {
    throw new Error('자동차 이름은 중복되지 않아야 합니다.');
  }
}
