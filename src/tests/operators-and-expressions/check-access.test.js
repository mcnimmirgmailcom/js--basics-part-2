import {
  checkAccess,
  checkAccessOneLine,
} from "../../operators-and-expressions/check-access";
import { test, expect, describe } from "vitest";

describe("check access", () => {
  test("checkAccess", () => {
    expect(checkAccess(18, true, false)).toBe(true);
  });

  if (checkAccessOneLine) {
    test("checkAccessOneLine", () => {
      expect(checkAccessOneLine(18, true, false)).toBe(true);
    });
  }
});
