import {
  counterPlusOne,
  counterMinusOne,
  counterTimesTwo,
  counterDividedByTwo,
  counterModuloTwo,
} from "../../operators-and-expressions/shorthand-assignment-operators";
import { test, expect, describe } from "vitest";

describe("shorthand assignment operators", () => {
  test("counterPlusOne", () => {
    expect(counterPlusOne()).toBe(6);
  });

  test("counterMinusOne", () => {
    expect(counterMinusOne()).toBe(4);
  });

  test("counterTimesTwo", () => {
    expect(counterTimesTwo()).toBe(10);
  });

  test("counterDividedByTwo", () => {
    expect(counterDividedByTwo()).toBe(3);
  });

  test("counterModuloTwo", () => {
    expect(counterModuloTwo()).toBe(0);
  });
});
