import { amountFormat, calcPageNo, numberFormat } from '../src';

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
describe('金额格式化', () => {
  test('低于1万', () => {
    expect(amountFormat(2000)).toBe('2,000.00');
  });
  test('高于1万', () => {
    expect(amountFormat(20000)).toBe('2.00万');
  });
  test('高于1万，修改后缀', () => {
    expect(amountFormat(20000, '万元')).toBe('2.00万元');
  });
  test('千万以上，', () => {
    expect(amountFormat(20000000, '万元')).toBe('2,000.00万元');
  });
});
