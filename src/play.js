import { readLineAsync } from './input/readline.js';
import {Car} from './model/car.js';
import {Race} from './model/race.js';

// 입출력 예시
export async function play() {
  const name = await readLineAsync("자동차 이름(5자 이하)을 입력하세요 > ");

  const car = new Car(name);
  const race = new Race(car);
  race.runAll();
}
