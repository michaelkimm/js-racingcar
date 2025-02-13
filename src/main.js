import { startRace } from './core/services/race.js';
import readLineAsync from './utils/readLineAsync.js';
import { TOTAL_ROUNDS } from './constants.js';
import { validateCarNames } from './validation.js';
import { RaceView } from './ui/output.js';

// 입출력 예시
async function play() {
  try {
    const input = await readLineAsync(
      '자동차 이름을 입력하세요 (쉼표로 구분해주세요) > '
    );
    const carNames = input.split(',').map((name) => name.trim());

    validateCarNames(carNames);

    startRace(carNames, TOTAL_ROUNDS, RaceView);
  } catch (error) {
    console.error(error.message);
  }
}

play();
