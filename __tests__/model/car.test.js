import {Car} from '../../src/model/car';

describe('자동차', () => {

  describe('이름을 상태로 가진다.', () => {

    test('생성자로 설정할 수 있다.', () => {
      // given
      let carName = "둥둥이";
  
      // when
      let car = new Car(carName);
  
      // then
      expect(car.name).toEqual(carName);
    })

    test.each([
      ["", false], 
      ["12345", true],
      ["123456", false]
    ])('길이는 1이상 5이하여야 한다.', (name, expected) => {
      // when, then
      if (expected) {
        expect(() => {new Car(name)}).not.toThrow();
      } else {
        expect(() => {new Car(name)}).toThrow(new Error('자동차 이름은 1글자 이상, 5글자 이하여야 합니다.'));
      }
    })
  })

  test('위치 값을 가지며 초기 상태는 0이다.', () => {
    // when
    let car = new Car('name');

    // then
    expect(car.position).toEqual(0);
  })

  test('전진할 수 있으며 한 번에 1만큼 전진한다.', () => {
    // given
    let car = new Car('name');
    const beforePosition = car.position;

    // when
    car.go();

    // then
    const afterPosition = car.position;
    expect(afterPosition).toEqual(beforePosition + 1);
  })
})
