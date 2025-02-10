class Situation {

    constructor(race) {
        this.race = race;
        this.history = []; 
    }

    recordSituation() {
        const currentSituation = this.race.cars.map(car => ({
            name: car.name,
            distance: car.distance
        }));
        this.history.push(currentSituation);
    }
    
}

export default Situation;