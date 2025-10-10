import {
  isEqual,
  isStrictlyEqual,
  isNotEqual,
  isStrictlyNotEqual,
  isGreaterThan,
  isLessThan,
  isGreaterOrEqual,
  isLessOrEqual,
} from "../../operators-and-expressions/comparison-operators";
import { test, expect, describe } from "vitest";

describe("comparison operators", () => {
  test("isEqual", () => {
    expect(isEqual()).toBe(true);
  });

  test("isStrictlyEqual", () => {
    expect(isStrictlyEqual()).toBe(false);
  });

  test("isNotEqual", () => {
    expect(isNotEqual()).toBe(false);
  });

  test("isStrictlyNotEqual", () => {
    expect(isStrictlyNotEqual()).toBe(true);
  });

  test("isGreaterThan", () => {
    expect(isGreaterThan()).toBe(true);
  });

  test("isLessThan", () => {
    expect(isLessThan()).toBe(true);
  });

  test("isGreaterOrEqual", () => {
    expect(isGreaterOrEqual()).toBe(false);
  });

  test("isLessOrEqual", () => {
    expect(isLessOrEqual()).toBe(true);
  });
});
