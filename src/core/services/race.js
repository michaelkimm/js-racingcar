import { Car } from '../models/Car.js';
import { Race } from '../models/Race.js';

export function startRace(carNames, totalRounds, view) {
  const cars = carNames.map((name) => new Car(name));
  const race = new Race(cars, totalRounds);

  view.printCarNames(race.cars);

  while (race.hasNextRound()) {
    const roundResult = race.runRound();
    view.printRoundProgress(roundResult);
  }
}
