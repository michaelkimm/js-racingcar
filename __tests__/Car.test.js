import { Car } from '../src/main.js';

const createCar = (name = '이름') => {
  return new Car(name);
}

describe('자동차는', () => {
  it('이름을 상태로 가질 수 있다', () => {
    const CAR_NAME = '이름'
    
    const car = createCar(CAR_NAME);

    expect(car.name).toBe(CAR_NAME);
  })

  it('위치 값을 가지며, 초기 상태는 0 이다', () => {
    const car = createCar();

    expect(car.location).toBe(0);
  })

  it('전진할 수 있으며 한 번에 1만큼 전진한다.', () => {
    const car = createCar();

    car.move();

    expect(car.location).toBe(1);
  })
})