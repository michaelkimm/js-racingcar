import Race from "../src/race.js";
import Car from "../src/car.js";

describe("Race Class 테스트", () => {
    let race;

    beforeEach(() => {
        jest.clearAllMocks(); 
        jest.spyOn(Math, "random").mockReturnValue(0.4);

        const car1 = new Car("NEXT");
        const car2 = new Car("STEP");
    
        race = new Race([car1, car2], 5);
    });

    it("Car 배열을 입력받는다.", () => {
        expect({
            carNames: race.cars.map(car => car.name),
            moveCount: race.moveCount
        }).toEqual({
            carNames: ["NEXT", "STEP"],
            moveCount: 5
        });
    })
    
    it("자동차들을 한번씩 전진시킨다.", () => {
        race.moveForwardCars();
        expect(race.cars.map(car => car.distance)).toEqual([1, 1]);
    });
    
    it("레이싱을 시작한다.", () => {
        race.startRace();
        expect(race.cars.map(car => car.distance)).toEqual([5, 5]);
    });

    it("현재 Race의 상황을 저장한다.", () => {
        race.recordHistory();

        expect(race.history).toEqual([
            [
                { name: "NEXT", distance: 0 },
                { name: "STEP", distance: 0 }
            ]
        ]);
    });

    it("우승자를 가져온다.", () => {
        race.startRace();
        expect(race.getWinner()).toEqual(["NEXT", "STEP"]);
    });

});
