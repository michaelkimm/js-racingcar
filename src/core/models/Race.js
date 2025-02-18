export class Race {
  cars;
  totalRounds;
  currentRound = 1;

  constructor(cars, rounds) {
    if (!Array.isArray(cars) || cars.length === 0) {
      throw new Error('At least one car must be provided');
    }

    if (
      typeof rounds !== 'number' ||
      rounds <= 0 ||
      !Number.isInteger(rounds)
    ) {
      throw new Error('Rounds must be a positive integer');
    }

    this.cars = cars;
    this.totalRounds = rounds;
  }

  hasNextRound() {
    return this.currentRound <= this.totalRounds;
  }

  runRound() {
    this.cars.forEach((car) => car.move(this.generateRandomNumber()));
    const roundSummary = {
      round: this.currentRound,
      cars: this.cars.map((car) => ({
        name: car.name,
        position: car.position,
      })),
    };

    this.currentRound += 1;
    return roundSummary;
  }

  generateRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  getWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.position));
    return this.cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
  }
}
