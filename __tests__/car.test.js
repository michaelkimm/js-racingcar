import Car from "../src/domain/car.js";

describe("Car Class 테스트", () => {
    let car;

    beforeEach(() => {
        jest.clearAllMocks(); 
        jest.spyOn(Math, "random").mockReturnValue(0.4);
        car = new Car("NEXT");
    });

    it("자동차는 이름을 가진다.", () => {
        const car = new Car("NEXT");
    
        expect(car.name).toEqual("NEXT");
    
    })
    
    it("자동차는 초기에는 거리 0을 가진다.", () => {
        const car = new Car("NEXT");
    
        expect(car.distance).toEqual(0);
    })
    
    it("자동차를 전진시킨다.", () => { 
        const car = new Car("NEXT");
    
        car.moveForward();
    
        expect(car.distance).toEqual(1);
    })
    
    it("자동차는 5자리를 넘으면 안된다.", () => {
        expect(() => new Car("NEXTSTEP")).toThrow(Car.OVER_MAXIMUM_LENGTH_MESSAGE);
    })
    
    it("자동차는 1자리를 이상이여야 한다.", () => {
        expect(() => new Car("")).toThrow(Car.OVER_MINIMUM_LENGTH_MESSAGE);
    })
})