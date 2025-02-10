import Race from "../src/race.js";
import Car from "../src/car.js";
import Situation from "../src/situation.js";

describe("Situation Class 테스트", () => {
    let race;
    let situation;

    beforeEach(() => {
        const car1 = new Car("NEXT");
        const car2 = new Car("STEP");
        race = new Race([car1, car2], 5);
        situation = new Situation(race);
    });

    it("Situation을 생성한다.", () => {
        expect(situation.race).toEqual(race);
    });

    it("현재 Race의 상황을 저장한다.", () => {
        situation.recordSituation();

        expect(situation.history).toEqual([
            [
                { name: "NEXT", distance: 0 },
                { name: "STEP", distance: 0 }
            ]
        ]);
    });
});