import { Drug, Pharmacy } from "./pharmacy";

describe("Normal drugs positive expiresIn", () => {
  it("should decrease the benefit by 1 and the expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("test", 2, 10)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 9)],
    );
  });
});

describe("Normal drugs negative expiresIn", () => {
  it("should decrease the benefit by 2 and the expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("test", -2, 10)]).updateBenefitValue()).toEqual(
      [new Drug("test", -3, 8)],
    );
  });
});

describe("Herbal Tea positive expiresIn", () => {
  it("should increase the benefit by 1 and the expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 1, 11)],
    );
  });
});

describe("Herbal Tea negative expiresIn", () => {
  it("should increase the benefit by 2 and the expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", -2, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -3, 12)],
    );
  });
});

describe("Fervex expiresIn lower than 10", () => {
  it("should increase the benefit by 1 and the expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("Fervex", 13, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 12, 11)],
    );
  });
});

describe("Fervex expiresIn 10", () => {
  it("should increase the benefit by 2 and the expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("Fervex", 10, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 9, 12)],
    );
  });
});

describe("Fervex expiresIn 5", () => {
  it("should increase the benefit by 3 and the expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("Fervex", 5, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 4, 13)],
    );
  });
});

describe("Fervex negative expiresIn", () => {
  it("should decrease the benefit by 2 and the expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("Fervex", 0, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -1, 0)],
    );
  });
});

describe("Magic Pill positive expiresIn", () => {
  it("should not move", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 2, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 2, 10)],
    );
  });
});

describe("Magic Pill negative expiresIn", () => {
  it("should not move", () => {
    expect(new Pharmacy([new Drug("Magic Pill", -2, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", -2, 10)],
    );
  });
});

describe("Dafalgan positive expiresIn", () => {
  it("should decrease the benefit by 2 and the expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 2, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 1, 8)],
    );
  });
});

describe("Dafalgan negative expiresIn", () => {
  it("should decrease the benefit by 4 and the expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("Dafalgan", -2, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", -3, 6)],
    );
  });
});