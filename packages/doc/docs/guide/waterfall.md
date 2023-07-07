---
toc: content
---
# Waterfall
## 安装
```
yarn add react-waterfall-clover
```
## 瀑布流
```jsx
import { Waterfall } from 'react-waterfall-clover';

const images = [
  {src: "https://www.leiyouxi.com/wp-content/uploads/2022/10/8qwid.jpg"},
  {src:"https://img.3dmgame.com/uploads/images/news/20221212/1670810198_320504.png",},
  {src:"https://img.huanghelou.cc/zb_users/upload/2022/06/202206121655025127298987.jpg",},
  {src:"https://img.zcool.cn/community/013ba35dc24dbda801209e1f04be47.jpg@2o.jpg",},
  {src:"https://img.zcool.cn/community/014414577f6f1f0000012e7ead25b6.jpg@1280w_1l_2o_100sh.jpg",},
]
export default () => {
    return <Waterfall
        className="container"
        col={2}
        dataSource={images}
        colWidth={0}
        fieldName='src'
        renderItem={(item, index) => (
          <div>
            <img src={item.src} key={index} alt={item} />
            <div>
              <span>666666</span>
            </div>
          </div>
        )}
      />
}
```

## API

| 属性            | 类型                                         | 默认    | 必要  | 描述                 |
| --------------- | ------------------------------------------  | ------- | ----- | -------------------- |
| dataSource      | any[]                                       | []      | true | 数据源                 |
| col             | number                                      | 3       | false | 列数                 |
| fieldName       | string                                      | `url`   | false | 图片字段名             |
| colWidth        | number                                      | 自适应   | false | 列宽度，默认根据列数自适应宽度 |
| space           | number \/| number[]                          | 10      | false | 间隙                 |
| extraItemHeight | number                                      | 0       | false | item额外参与计算高度 |
| renderItem      | (item: any, index: number) => JSX.Element   | -       | false | 自定义节点 |
| onScroll        | HTMLDivElement                              | -       | false | 容器滚动事件         |


更多参考 [https://www.npmjs.com/package/react-waterfall-clover](https://www.npmjs.com/package/react-waterfall-clover)





