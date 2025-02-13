export class Race {
  cars;
  totalRounds;
  currentRound = 1;

  constructor(cars, rounds) {
    if (!Array.isArray(cars) || cars.length === 0) {
      throw new Error('At least one car must be provided');
    }

    this.cars = cars;
    this.totalRounds = rounds;
  }

  hasNextRound() {
    return this.currentRound <= this.totalRounds;
  }

  runRound() {
    this.cars.forEach((car) => car.move());
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
}
