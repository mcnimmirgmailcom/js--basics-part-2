import { myCalculator } from "../../operators-and-expressions/my-calculator";
import { test, expect, describe } from "vitest";

describe("myCalculator", () => {
  test("add function", () => {
    expect(myCalculator("+", 1, 2)).toBe(3);
  });

  test("subtract function", () => {
    expect(myCalculator("-", 3, 2)).toBe(1);
  });

  test("multiply function", () => {
    expect(myCalculator("*", 4, 2)).toBe(8);
  });

  test("division function", () => {
    expect(myCalculator("/", 8, 2)).toBe(4);
    expect(myCalculator("/", 2, 0)).toBe("Kan inte dela med noll");
  });
});
