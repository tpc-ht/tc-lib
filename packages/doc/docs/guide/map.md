---
toc: content
group:
  title: form
  order: 1
order: 1
---
# 地图

## 腾讯地图
### AddMapJs 动态添加腾讯地图
`const AddMapJs = (key: string, id = 'TxMapJs'):Promise<any>`
### 开启当前定位
在`header`中添加`script`标签
例如：umi配置
```javascript
//文件： config/config.ts
export default defineConfig({
  //....
  scripts: [
    {
      src: 'https://mapapi.qq.com/web/mapComponents/geoLocation/v/geolocation.min.js',
      type: 'text/javascript',
    },
  ]
  //...
})
```
### 案例
```jsx
import { TxMap,AddMapJs } from '@tc-lib/components';
import { useEffect,useState } from 'react';
import { Spin } from 'antd';
export default ()=>{
  const [load,setLoad] = useState(false);
  useEffect(()=>{
    AddMapJs('SGYBZ-BFH3Z-TMGXP-ZSU7C-T4ATF-ZHFYR').then(()=>{setLoad(true)})
  },[])
  return load?<TxMap />:<Spin />
}
```
### API
| 属性 | 说明 | 类型  | 必填 | 默认值 |
| ---- | --- | --- | --- | --- |
| id   | 地图容器id      | `string` | - | TxMapJs |
| disabled | 禁用  | `boolean`    | - | false |
| mapConfig | 地图配置  | `any`    | - | `{viewMode: '2D',pitch: 0,rotation: 0,zoom: 13}` |
| height | 高度        | `number` | - | 300 |
| onChange | 值变更    | `(value: IMapValueType) => void;` | - | - |
| value | value        | `IMapValueType` | - | - |

```ts
interface IMapValueType {
  lat: number;
  lng: number;
  address: string;
}
```
