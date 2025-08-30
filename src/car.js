class Car {
  pos = 0;

  constructor(name) {
    this.name = name;
  }

  go () {
    this.pos += 1;
    return this.pos;
  }
}
