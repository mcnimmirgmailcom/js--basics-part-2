import { myCalculator } from "../../operators-and-expressions/my-calculator";
import { test, expect } from "vitest";

test("myCalculator", () => {
  expect(myCalculator("+", 1, 2)).toBe(3);
  expect(myCalculator("-", 3, 2)).toBe(1);
  expect(myCalculator("*", 4, 2)).toBe(8);
  expect(myCalculator("/", 8, 2)).toBe(4);
  expect(myCalculator("/", 2, 0)).toBe("Kan inte dela med noll");
});
