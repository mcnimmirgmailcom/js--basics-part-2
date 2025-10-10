import {
  allCapsWithNoWhiteSpace,
  makeUnderScoreToSpaces,
  makeCommasToSpaces,
  makeArrayOfWords,
  removeAllWhiteSpace,
  makeUnderscoreToCamelCase,
} from "../../methods/string-methods";
import { test, expect } from "vitest";

test("allCapsWithNoWhiteSpace", () => {
  expect(allCapsWithNoWhiteSpace("   String Methods  ")).toBe("STRING METHODS");
});

test("makeUnderScoreToSpaces", () => {
  expect(makeUnderScoreToSpaces("banana_cherry")).toBe("banana cherry");
});

test("makeCommasToSpaces", () => {
  expect(makeCommasToSpaces("apple,banana,cherry")).toBe("apple banana cherry");
});

test("makeArrayOfWords", () => {
  expect(makeArrayOfWords("apple banana cherry")).toEqual([
    "apple",
    "banana",
    "cherry",
  ]);
});

test("removeAllWhiteSpace", () => {
  expect(removeAllWhiteSpace("   String Methods  ")).toBe("StringMethods");
});

test("makeUnderscoreToCamelCase", () => {
  expect(makeUnderscoreToCamelCase("banana_cherry_bubble_gum")).toBe(
    "bananaCherryBubbleGum"
  );
});
