import { formatDates } from '../src';

describe('时间格式化', () => {
  let params = { name: '小明', id: 1 };
  test("{name:'小明',id:1}", () => {
    expect(formatDates(params)).toBe('name=%E5%B0%8F%E6%98%8E&id=1');
  });
});
