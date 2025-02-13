import * as rand from "../src/util/random.js";

describe("Random 테스트", () => {
    beforeEach(() => {
        jest.clearAllMocks(); 
    });

    it("랜덤값이 4이상이면 true를 반환 합니다.", () => {
        jest.spyOn(Math, "random").mockReturnValue(0.4);
        expect(rand.randMoveForward(10, 4)).toBe(true);
    });

    it("랜덤값이 4미만이면 false를 반환 합니다.", () => {
        jest.spyOn(Math, "random").mockReturnValue(0.3);
        expect(rand.randMoveForward(10, 4)).toBe(false);
    });
});