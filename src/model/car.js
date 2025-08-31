export class Car {
  #position = 0;

  constructor(name) {
    console.log('이름 : ' + name + ', 길이 : ' + name.length)
    if (name.length < 1 || name.length > 5) {
      // todo : ModelError 정의
      throw new Error('자동차 이름은 1글자 이상, 5글자 이하여야 합니다.');
    }
    this.name = name;
  }

  go () {
    this.#position += 1;
    return this.#position;
  }

  get position() {
    return this.#position;
  }
}