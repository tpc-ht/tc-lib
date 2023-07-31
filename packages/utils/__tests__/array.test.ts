import {
  complement,
  getArrMax,
  getArrNode,
  intersect,
  makeArray,
  minus,
  toJSON,
} from "../src";
let A = [
  { id: 0, name: "小0" },
  { id: 1, name: "小1" },
  { id: 2, name: "小2" },
  { id: 2, name: "小3" },
  { id: 3, name: "小4" },
];
let B = [
  { id: 2, name: "小5" },
  { id: 3, name: "小6" },
  { id: 3, name: "小7" },
  { id: 4, name: "小8" },
];
describe("获取指定长度数组", () => {
  test("长度为2", () => {
    expect(toJSON(makeArray(2))).toBe(toJSON(["", ""]));
  });
});

describe("交集", () => {
  test("交集01", () => {
    expect(toJSON(intersect(A, B, "id"))).toBe(
      toJSON([
        { id: 2, name: "小2" },
        { id: 2, name: "小3" },
        { id: 3, name: "小4" },
      ])
    );
  });
});
describe("差集", () => {
  test("差集01", () => {
    expect(toJSON(minus(A, B, "id"))).toBe(
      toJSON([
        { id: 0, name: "小0" },
        { id: 1, name: "小1" },
      ])
    );
  });
});
describe("补集", () => {
  test("补集01", () => {
    expect(toJSON(complement(A, B, "id"))).toBe(
      toJSON([
        { id: 0, name: "小0" },
        { id: 1, name: "小1" },
        { id: 4, name: "小8" },
      ])
    );
  });
});
describe("数组最大值", () => {
  test("最值数组", () => {
    expect(toJSON(getArrMax([1, 2, 3, 4, 5], 3))).toBe(toJSON([3, 4, 5]));
  });
});
describe("数组指定值", () => {
  test("01", () => {
    expect(toJSON(getArrNode(A, 1, "id"))).toBe(toJSON({ id: 1, name: "小1" }));
    expect(getArrNode(A, 1, "id", "name")).toBe("小1");
  });
});
