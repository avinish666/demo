import sum from "./sum.js";

describe("test for sum fnx", () => {
  test("add 2 + 2 to equal 4", () => {
    expect(sum(2, 2)).toBe(4);
  });

  test("add -4 + -4 to equal -8", () => {
    expect(sum(-4, -4)).toBe(-8);
  });
});
