import { Car } from '../src/core/models/Car';

const name = 'jinju';

describe('Car', () => {
  let car;

  beforeEach(() => {
    car = new Car(name);
  });

  describe('Car initialization', () => {
    test('should create a car with a given name', () => {
      expect(car).toEqual(expect.objectContaining({ name }));
    });

    test('should throw an error if name is not provided', () => {
      expect(() => new Car()).toThrow('car name is required');
    });

    test('should initialize the car with position 0', () => {
      expect(car.position).toBe(0);
    });
  });

  describe('Car movement', () => {
    test('should move forward when randomValue is 4 or more', () => {
      car.move(5);
      expect(car.position).toBe(1);
    });

    test('should not move when randomValue is 3 or less', () => {
      car.move(3);
      expect(car.position).toBe(0);
    });
  });
});