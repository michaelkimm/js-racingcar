export const RaceView = {
  printCarNames(cars) {
    console.log(cars.map((car) => car.name).join(', '));
  },

  drawTrack(position) {
    return '-'.repeat(Math.max(1, position));
  },

  printRoundProgress(roundResult) {
    console.log(`\nRound ${roundResult.round}:`);
    roundResult.cars.forEach((car) => {
      console.table(`${car.name}: ${this.drawTrack(car.position)}`);
    });
  },
};
