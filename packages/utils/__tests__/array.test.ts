import {
  complement,
  continuousNumber,
  downEle,
  equalTuple,
  getArrMax,
  getArrNode,
  intersect,
  makeArray,
  minus,
  moveEle,
  swapEle,
  toJSON,
  upEle,
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
describe("数组值移动", () => {
  let arr = [1, 2, 3, 4, 5];
  test("数组值移动", () => {
    expect(toJSON(moveEle(arr, 3, 0))).toBe(toJSON([4, 1, 2, 3, 5]));
  });
  test("数组值互换", () => {
    expect(toJSON(swapEle(arr, 0, 4))).toBe(toJSON([5, 1, 2, 3, 4]));
  });
  test("数组值上移", () => {
    expect(toJSON(upEle(arr, 0))).toBe(toJSON([1, 2, 3, 4, 5]));
  });
  test("数组值下移", () => {
    expect(toJSON(downEle(arr, 0))).toBe(toJSON([2, 1, 3, 4, 5]));
  });
});
describe("数组拆分为元组", () => {
  let arr = [1, 2, 3, 4, 5];
  test("元组拆分", () => {
    expect(toJSON(equalTuple(arr, 3))).toBe(
      toJSON([
        [1, 2, 3],
        [4, 5],
      ])
    );
  });
  test("元组拆分-空袭填充", () => {
    expect(toJSON(equalTuple(arr, 3, true))).toBe(
      toJSON([
        [1, 2, 3],
        [4, 5, undefined],
      ])
    );
  });
});

describe("数组连号字符串", () => {
  let arr = [1, 3, 12, 2, 99, 98, 7, 9, 6, 10];
  test("获取连号字符串", () => {
    expect(toJSON(continuousNumber(arr))).toBe(
      toJSON('1-3,6-7,9-10,12,98-99')
    );
  });
});
