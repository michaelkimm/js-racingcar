import {Car} from 'model/car.js';

// 입출력 예시
async function play() {
  const name = await readLineAsync("자동차 이름(5자 이하)을 입력하세요 > ");

  const car = new Car(name);

  console.log(`자동차 이름은 ${name}입니다.`);
}
