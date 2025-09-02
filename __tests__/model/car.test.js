import { Car } from '../../src/model/car';

describe('자동차', () => {

  describe('이름', () => {

    test('생성자로 설정할 수 있다.', () => {
      // given
      const carName = "둥둥이";

      // when
      const car = new Car(carName);

      // then
      expect(car.name).toEqual(carName);
    })

    test('길이는 1~5자 이하여야 한다.', () => {
      expect(() => { new Car("12345") }).not.toThrow();
    })

    test.each(
      ["", "123456"]
    )('길이가 5이상이거나 비어있으면 에러가 발생한다.', name => {
      expect(() => { new Car(name) }).toThrow(new Error('자동차 이름은 1글자 이상, 5글자 이하여야 합니다.'));
    })
  })

  test('위치 값을 가지며 초기 상태는 0이다.', () => {
    // when
    const car = new Car('name');

    // then
    expect(car.position).toEqual(0);
  })

  test('전진할 수 있으며 한 번에 1만큼 전진한다.', () => {
    // given
    const car = new Car('name');
    const beforePosition = car.position;

    // when
    car.go();

    // then
    const afterPosition = car.position;
    expect(afterPosition).toEqual(beforePosition + 1);
  })
})
