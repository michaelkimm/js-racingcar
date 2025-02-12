import * as rand from "./random.js"

class Car {

    static MINIMUM_LENGTH = 1;
    static MAXIMUM_LENGTH = 5;
    static OVER_MINIMUM_LENGTH_MESSAGE = "자동차 이름은 1자 이상이여야합니다."
    static OVER_MAXIMUM_LENGTH_MESSAGE = "자동차 이름은 5자를 넘으면 안됩니다."

    constructor(name) {
        this.confirmMinimumLength(name);
        this.confirmMaximumLength(name)
        this.name = name;
        this.distance = 0;
    }

    moveForward() {
        if(rand.randMoveForward()) {
            this.distance += 1;
        }
    }

    confirmMinimumLength(name) {
        if(name.length < Car.MINIMUM_LENGTH) {
            throw new Error(Car.OVER_MINIMUM_LENGTH_MESSAGE)
        }
    }

    confirmMaximumLength(name) {
        if(name.length > Car.MAXIMUM_LENGTH) {
            throw new Error(Car.OVER_MAXIMUM_LENGTH_MESSAGE)
        }
    }
}

export default Car;