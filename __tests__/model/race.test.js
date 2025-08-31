import {Car} from '../../src/model/car';
import { Race } from '../../src/model/race';

describe('경주', () => {

  test('는 5회 고정하여 실행하고, 자동차는 1회당 1칸씩 전진한다.', () => {
    // given
    const car = new Car('soo');
    const race = new Race(car);

    // when
    race.runAll();

    // then
    expect(car.position).toEqual(5);
  })
})
