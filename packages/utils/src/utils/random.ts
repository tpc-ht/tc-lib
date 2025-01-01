/** 生成随机十六进制 颜色 */
export const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')}`;

let IDX = 36,
  HEX = '';
while (IDX--) HEX += IDX.toString(36);
/** uid生成 */
export const uid = (len = 11) => {
  let str = '',
    num = len;
  while (num--) str += HEX[(Math.random() * 36) | 0];
  return str;
};
