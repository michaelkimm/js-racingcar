import { Car } from '../src/core/models/Car';

const name = 'jinju';

describe('Car class', () => {
  let car;

  beforeEach(() => (car = new Car(name)));

  test('should create a car with a given name', () => {
    expect(car).toEqual(expect.objectContaining({ name }));
  });

  test('should throw an error if name is not provided', () => {
    expect(() => new Car()).toThrow('car name is required');
  });

  test('should initialize the car with position 0', () => {
    expect(car.position).toBe(0);
  });

  test('should increase the position by 1 when the car moves', () => {
    const initialPosition = car.position;

    car.move();

    expect(car.position).toBe(initialPosition + 1);
  });
});
