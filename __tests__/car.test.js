import {Car} from '../src/car';

describe('자동차 클래스 테스트', () => {

  test('이름을 상태로 가진다', () => {
    // given
    let carName = "둥둥이";

    // when
    let car = new Car(carName);

    // then
    expect(car.name).toEqual(carName);
  })

  test('자동차는 위치 값을 가지며 초기 상태는 0이다.', () => {
    // when
    let car = new Car('anyName');

    // then
    expect(car.position).toEqual(0);
  })

  test('자동차는 전진할 수 있으며 한 번에 1만큼 전진한다.', () => {
    // given
    let car = new Car('anyName');
    expect(car.position).toEqual(0);

    // when
    car.go();

    // then
    expect(car.position).toEqual(1);
  })
})