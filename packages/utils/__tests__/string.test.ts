import {
  getFileName,
  getFileSuffix,
  getTreeNodes,
  parsePathParams,
  repeat,
  toJSON,
  toPathParams,
} from '../src';

describe('对象转路径参数', () => {
  let params = { name: '小明', id: 1 };
  test("{name:'小明',id:1}", () => {
    expect(toPathParams(params)).toBe('name=%E5%B0%8F%E6%98%8E&id=1');
  });
});
//
describe('解析路径参数', () => {
  let params = '?id=1&name=小明';
  let params1 = 'id=1&name=小明';
  let params2 = '前缀?id=1&name=小明';
  let params3 = '前缀?';
  test('?id=1&name=小明', () => {
    expect(parsePathParams(params)).toMatchObject({ id: '1', name: '小明' });
  });
  test('id=1&name=小明', () => {
    expect(parsePathParams(params1)).toMatchObject({ id: '1', name: '小明' });
  });
  test('前缀?id=1&name=小明', () => {
    expect(parsePathParams(params2)).toMatchObject({ id: '1', name: '小明' });
  });
  test('前缀?', () => {
    expect(parsePathParams(params3)).toBe(undefined);
  });
});

describe('取tree的值', () => {
  test('匹配单个节点', () => {
    const c = getTreeNodes(
      [{ value: 1, children: [{ value: 2 }, { value: 3 }] }],
      2,
    );
    expect(toJSON(c)).toBe(toJSON([{ value: 2 }]));
  });
  test('匹配多个节点', () => {
    const c = getTreeNodes(
      [{ value: 1, children: [{ value: 2 }, { value: 3 }] }],
      [2, 3],
    );
    expect(toJSON(c)).toBe(toJSON([{ value: 2 }, { value: 3 }]));
  });
});
describe('字符串重复生成', () => {
  test('生成多个0', () => {
    expect(repeat('0', 4)).toBe('0000');
  });
});

describe('获取文件后缀', () => {
  test('获取后缀', () => {
    expect(getFileSuffix('image.png.jpg')).toBe('jpg');
    expect(getFileSuffix('image.png.JPG')).toBe('jpg');
    expect(getFileSuffix('image.png.JPG', false)).toBe('JPG');
  });
});
describe('获取文件名', () => {
  test('获取名称', () => {
    expect(getFileName('image.jpg')).toBe('image');
    expect(getFileName('image.png.jpg')).toBe('image.png');
  });
});
