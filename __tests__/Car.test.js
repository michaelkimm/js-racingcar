import Car from '../src/Car';

describe('자동차 클래스', () => {
  let car;
  const expectedCarName = 'Hyundai';
  beforeEach(() => {
    car = new Car('Hyundai');
  });

  it('인수로 전달된 string과 동일한 이름을 가진다.', () => {
    expect(car.name).toBe(expectedCarName);
  });

  it('초기 위치 값은 0이다.', () => {
    expect(car.position).toBe(0);
  });

  it('전진할 수 있으며, 한 번에 1만큼 전진한다.', () => {
    car.forward();

    expect(car.position).toBe(1);
  });

  it('2번 전진하면 위치는 2만큼 더해진다.', () => {
    car.position = 2;

    car.forward();
    car.forward();

    expect(car.position).toBe(4);
  });
});
