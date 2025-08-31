export class Race {
  #TOTAL_ROUND = 5;

  constructor(car) {
    this.car = car;
  }

  #run() {
    this.car.go();
    console.log(this.car.name + " : " + '-'.repeat(this.car.position));
    console.log();
  }

  runAll() {
    console.log('실행 결과')
    for (var r = 1; r <= this.#TOTAL_ROUND; r++) {
      this.#run();
    }
    console.log('경주를 완료했습니다.')
  }
}
