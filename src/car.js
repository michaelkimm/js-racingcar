export class Car {
  position = 0;

  constructor(name) {
    this.name = name;
  }

  go () {
    this.position += 1;
    return this.position;
  }
}
