import Situation from "./situation.js";

class Race {

    constructor(cars, moveCount) {
        this.cars = cars;
        this.moveCount = moveCount;
        this.situation = new Situation(this);
    }

    startRace() {
        for (let i = 0; i < this.moveCount; i++) {
            this.moveForwardCars();
            this.situation.recordSituation();
        }
    }

    moveForwardCars() {
        for (let car of this.cars) {
            car.moveForward();
        }
    }

}

export default Race;