import {
  reverseArray,
  removeAppleFromArray,
  removeFiveFroremmArray,
  getFirstElement,
  getLastElement,
  removeMiddleItem,
  reverseString,
  sumNumbers,
} from "../../methods/array-methods";
import { test, expect } from "vitest";

test("reverseArray", () => {
  expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
});

test("removeAppleFromArray", () => {
  expect(removeAppleFromArray()).toEqual(["banana", "cherry"]);
});

test("removeFiveFroremmArray", () => {
  expect(removeFiveFroremmArray()).toEqual([1, 2, 3, 4]);
});

test("getFirstElement", () => {
  expect(getFirstElement([1, 2, 3, 4, 5])).toEqual(1);
});

test("getLastElement", () => {
  expect(getLastElement([1, 2, 3, 4, 5])).toEqual(5);
});

test("removeMiddleItem", () => {
  expect(removeMiddleItem()).toEqual([1, 2, 4, 5]);
});

test("reverseString", () => {
  expect(reverseString("trash panda")).toEqual("adnap hsart");
  expect(reverseString("a man a plan a canal panama")).toEqual(
    "amanap lanac a nalp a nam a"
  );
});

test("sumNumbers", () => {
  expect(sumNumbers([1, 2, 3, 4, 5])).toEqual(15);
});
