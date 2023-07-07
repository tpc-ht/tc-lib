import {
  getFileName,
  getFileSuffix,
  getTreeNodes,
  repeat,
  toJSON,
  toPathParams,
} from '../src';

describe('对象转路径参数', () => {
  let params = { name: '小明', id: 1 };
  test("{name:'小明',id:1}", () => {
    expect(toPathParams(params)).toBe('name=小明&id=1');
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
