export class Car {
  position = 0;

  constructor(name) {
    this.name = name;
  }

  go () {
    this.pos += 1;
    return this.pos;
  }
}
