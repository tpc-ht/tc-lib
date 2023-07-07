import { calcPageNo, numberFormat } from '../src';

describe('小数格式化', () => {
  test('默认值', () => {
    expect(numberFormat(6)).toBe('6.00');
  });
  test('小数', () => {
    expect(numberFormat(6, 1)).toBe('6.0');
  });
  test('带后缀', () => {
    expect(numberFormat(69.567, 2, '%')).toBe('69.57 %');
  });
});
describe('分页计算', () => {
  test('返回上一页', () => {
    expect(calcPageNo(41, 3, 20)).toBe(2);
  });
  test('返回当前页', () => {
    expect(calcPageNo(42, 3, 20)).toBe(3);
  });
  test('批量删除', () => {
    expect(calcPageNo(42, 3, 20, 2)).toBe(2);
  });
});
