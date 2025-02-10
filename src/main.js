import * as io from "./view/inputoutput.js"
import Race from "./race.js";
import Car from "./car.js"

const main = async () => {
    const readline = io.createInterface();

    const names = await io.receivedCarNames(readline);

    const cars = [];
    for (const name of names) {
        cars.push(new Car(name));
    }
    
    const race = new Race(cars, 5);
    race.startRace();
    
    io.raceResult(race);

    readline.close();
}

main();

