import * as io from "../view/inputoutput.js"
import Race from "./race.js";
import Car from "./car.js"

const main = async () => {
    const readline = io.createInterface();

    const names = await io.receivedCarNames(readline);
    const count = await io.receivedAttemptCount(readline);

    const cars = names.map(name => new Car(name))
    
    const race = new Race(cars, count);
    race.startRace();
    
    io.raceResult(race);

    readline.close();
}

main();