import {
  getKeys,
  getValues,
  getEntries,
  fromEntriesToObject,
  mergeObjects,
  pick,
  invertObject,
} from "../../methods/object-methods";
import { test, expect, describe } from "vitest";

describe("object methods", () => {
  test("getKeys", () => {
    expect(getKeys({ a: 1, b: 2, c: 3 })).toEqual(["a", "b", "c"]);
  });

  test("getValues", () => {
    expect(getValues({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3]);
  });

  test("getEntries", () => {
    expect(getEntries({ a: 1, b: 2, c: 3 })).toEqual([
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ]);
  });

  test("fromEntriesToObject", () => {
    expect(
      fromEntriesToObject([
        ["a", 1],
        ["b", 2],
        ["c", 3],
      ])
    ).toEqual({
      a: 1,
      b: 2,
      c: 3,
    });
  });

  test("mergeObjects", () => {
    expect(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 })).toEqual({
      a: 1,
      b: 2,
      c: 3,
      d: 4,
    });
  });

  test("pick", () => {
    expect(pick({ a: 1, b: 2, c: 3 }, ["a", "b"])).toEqual({ a: 1, b: 2 });
  });

  test("invertObject", () => {
    expect(invertObject({ a: 1, b: 2, c: 3 })).toEqual({
      1: "a",
      2: "b",
      3: "c",
    });
  });
});
