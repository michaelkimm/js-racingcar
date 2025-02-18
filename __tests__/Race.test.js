import { Race } from '../src/core/models/Race';
import { Car } from '../src/core/models/Car';
import { TOTAL_ROUNDS } from '../src/constants';

const correctCarNames = ['jinju', 'grace'];
const emptyCarNames = [];
const wrongTypeCarNames = 'not an array';

describe('Race Class', () => {
  const ROUND_INCREMENT = 1;
  let cars;
  let race;

  describe('Race Creation', () => {
    test('should initialize with correct properties', () => {
      cars = correctCarNames.map((name) => new Car(name));
      race = new Race(cars, TOTAL_ROUNDS);

      expect(race.cars).toHaveLength(correctCarNames.length);

      expect(race.cars).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: correctCarNames[0], position: 0 }),
          expect.objectContaining({ name: correctCarNames[1], position: 0 }),
        ])
      );

      expect(race.totalRounds).toBe(TOTAL_ROUNDS);
      expect(race.currentRound).toBe(1);
    });

    test('should throw an error if no cars are provided', () => {
      expect(() => new Race(emptyCarNames, TOTAL_ROUNDS)).toThrow(
        'At least one car must be provided'
      );
    });

    test('should throw an error if cars is not an array', () => {
      expect(() => new Race(wrongTypeCarNames, TOTAL_ROUNDS)).toThrow(
        'At least one car must be provided'
      );
    });

    test('should throw an error if rounds is not a positive integer', () => {
      expect(() => new Race(cars, -1)).toThrow(
        'Rounds must be a positive integer'
      );
      expect(() => new Race(cars, 0)).toThrow(
        'Rounds must be a positive integer'
      );
      expect(() => new Race(cars, 'five')).toThrow(
        'Rounds must be a positive integer'
      );
      expect(() => new Race(cars, 1.1)).toThrow(
        'Rounds must be a positive integer'
      );
    });
  });

  describe('Race Progression', () => {
    beforeEach(() => {
      cars = correctCarNames.map((name) => new Car(name));
      race = new Race(cars, TOTAL_ROUNDS);
    });

    test('should correctly check if there are more rounds left', () => {
      expect(race.hasNextRound()).toBe(true);

      for (let i = 0; i < TOTAL_ROUNDS; i++) {
        race.runRound();
      }

      expect(race.hasNextRound()).toBe(false);
    });

    test('should correctly update current round after each race', () => {
      for (let i = 1; i <= TOTAL_ROUNDS; i++) {
        race.runRound();
        expect(race.currentRound).toBe(i + ROUND_INCREMENT);
      }
    });

    test('should return correct race summary after a round', () => {
      const roundResult = race.runRound();

      expect(roundResult).toHaveProperty('round', 1);
      expect(roundResult).toHaveProperty('cars');
      expect(roundResult.cars).toHaveLength(cars.length);

      roundResult.cars.forEach((car, index) => {
        expect(car).toHaveProperty('name', correctCarNames[index]);
        expect(car).toHaveProperty('position');
      });
    });
  });

  describe('Race Winner', () => {
    let cars;
    let race;

    beforeEach(() => {
      cars = [new Car('jinju'), new Car('grace'), new Car('kendrick')];
      race = new Race(cars, 5);
    });

    test('The farthest car is the winner', () => {
      cars[0].position = 3;
      cars[1].position = 5;
      cars[2].position = 2;

      expect(race.getWinners()).toEqual(['grace']);
    });

    test('Multiple winners should be returned', () => {
      cars[0].position = 5;
      cars[1].position = 5;
      cars[2].position = 2;

      expect(race.getWinners()).toEqual(['jinju', 'grace']);
    });
  });
});
