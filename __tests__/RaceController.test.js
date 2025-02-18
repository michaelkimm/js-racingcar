import { RaceController } from '../src/core/controllers/RaceController.js';
import { Car } from '../src/core/models/Car.js';
import { Race } from '../src/core/models/Race.js';

jest.mock('../src/core/models/Car.js');
jest.mock('../src/core/models/Race.js');

describe('RaceController', () => {
  let mockView;
  let raceController;
  const CAR_NAMES = ['jinju', 'grace'];
  const TOTAL_ROUNDS = 3;

  beforeEach(() => {
    mockView = {
      printCarNames: jest.fn(),
      printRoundProgress: jest.fn(),
      printWinners: jest.fn(),
    };
    raceController = new RaceController(mockView);
  });

  test('initializeRace() should create cars and initialize a race', () => {
    raceController.initializeRace(CAR_NAMES, TOTAL_ROUNDS);

    expect(Car).toHaveBeenCalledTimes(CAR_NAMES.length);

    const mockCarInstances = Car.mock.instances;
    expect(Race).toHaveBeenCalledWith(mockCarInstances, TOTAL_ROUNDS);

    expect(mockView.printCarNames).toHaveBeenCalled();
  });

  test('runRace() should call printRoundProgress for each round', () => {
    const mockRaceInstance = {
      hasNextRound: jest
        .fn()
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(false),
      runRound: jest.fn().mockReturnValue('MockRoundResult'),
      getWinners: jest.fn().mockReturnValue(['jinju']),
    };

    raceController.race = mockRaceInstance;
    raceController.runRace();

    expect(mockRaceInstance.hasNextRound).toHaveBeenCalledTimes(
      TOTAL_ROUNDS + 1
    );

    expect(mockRaceInstance.runRound).toHaveBeenCalledTimes(TOTAL_ROUNDS);

    expect(mockView.printRoundProgress).toHaveBeenCalledTimes(TOTAL_ROUNDS);
    expect(mockView.printRoundProgress).toHaveBeenCalledWith('MockRoundResult');

    expect(mockView.printWinners).toHaveBeenCalledWith(['jinju']);
  });

  test('runRace() should throw an error if race is not initialized', () => {
    expect(() => raceController.runRace()).toThrow('Initialize race first.');
  });
});
