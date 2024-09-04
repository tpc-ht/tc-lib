import { amountFormat, calcPageNo, strToNum, toFloat, toNum } from '../src';

describe('小数格式化', () => {
  test('toNum - 默认值', () => {
    expect(toNum(6)).toBe('6');
  });
  test('toNum - 带小数', () => {
    expect(toNum(6.556)).toBe('7');
  });
  test('toNum - 带后缀', () => {
    expect(toNum(69.567, '%')).toBe('70 %');
  });
  test('toFloat - 默认值', () => {
    expect(toFloat(6.561)).toBe('6.56');
  });
  test('toFloat - 默认值', () => {
    expect(toFloat(6)).toBe('6.00');
  });
  test('toFloat - 小数', () => {
    expect(toFloat(6.561, '', 1)).toBe('6.6');
  });
  test('toFloat - 带后缀', () => {
    expect(toFloat(6.561, '%', 2)).toBe('6.56 %');
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
  test('低于0', () => {
    expect(amountFormat(-2000)).toBe('-2,000.00');
  });
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
describe('字符串转数值', () => {
  test('100', () => {
    expect(strToNum('100')).toBe(100);
  });
  test('1A', () => {
    expect(strToNum('1A')).toBe(0);
  });
  test('A1', () => {
    expect(strToNum('A1', 2)).toBe(2);
  });
  test('测试空', () => {
    expect(strToNum('', null)).toBe(null);
  });
});
