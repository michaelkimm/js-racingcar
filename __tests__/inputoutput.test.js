import * as io from "../src/view/inputoutput.js";

it("입력받은 자동차이름을 콤마로 나눈다.", () => {
    expect(io.splitComma("NEXT,STEP", ",")).toEqual(["NEXT", "STEP"]);
})
