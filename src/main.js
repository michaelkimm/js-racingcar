export class Car { 
    constructor(name) {
        this.name = name;
        this.location = 0;
    }

    move() {
        this.location += 1;
    }
}