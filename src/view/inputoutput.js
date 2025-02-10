import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

export const createInterface = () => {
  return readline.createInterface({ input, output })
}

export const receivedCarNames = async (readline) => {
    const cars = await readline.question("경주할 자동차 이름을 입력하세요.\n");
    return splitComma(cars);
}

export const splitComma = (cars) => {
    return cars.split(",").map(name => name.trim()); 
}

export const raceResult = (race) => {
    console.log("\n실행결과\n");
    for (const history of race.situation.history) {
        printHistory(history); 
    }
    printEndRace(); 
}

const printHistory = (history) => {
    for (const car of history) {
        printCar(car);
    }
    console.log("\n");
}

const printCar = (car) => {
    console.log(car.name + ": " + "-".repeat(car.distance)); 
}

const printEndRace = () => {
    console.log("경주를 완료했습니다.");
}