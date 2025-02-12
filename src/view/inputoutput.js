
import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

const NEW_LINE = "\n";
const INPUT_CAR_NAME_MESSAGE = "경주할 자동차 이름을 입력하세요.";
const RESULT_MESSAGE = "실행결과";
const WINNER_MESSAGE = "가 최종 우승했습니다.";
const ATTEMPT_COUNT_MESSAGE = "시도할 회수는 몇회인가요?";
const COMMA = ",";

export const createInterface = () => {
  return readline.createInterface({ input, output })
}

export const receivedCarNames = async (readline) => {
    const cars = await readline.question(INPUT_CAR_NAME_MESSAGE + NEW_LINE);
    return splitComma(cars, COMMA);
}

export const splitComma = (str, separator) => {
  return str.split(separator).map(str => str.trim());
}

export const receivedAttemptCount = async (readline) => {
  return await readline.question(ATTEMPT_COUNT_MESSAGE + NEW_LINE);
}

export const raceResult = (race) => {
  console.log(NEW_LINE + RESULT_MESSAGE);
  for (const history of race.history) {
        printHistory(history); 
  }
  printWinners(race);
}

const printHistory = (history) => {
  for (const car of history) {
    printCar(car);
  }
  console.log(NEW_LINE);
}

const printCar = (car) => {
  console.log(car.name + ": " + "-".repeat(car.distance));
}

const printWinners = (race) => {
  console.log(race.getWinner().join(", ") + WINNER_MESSAGE);
}