export class Car {
  name;
  position = 0;

  constructor(name) {
    if (!name) {
      throw new Error('car name is required');
    }

    this.name = name;
  }

  move(randomValue) {
    if (randomValue >= 4) this.position += 1;
  }
}
