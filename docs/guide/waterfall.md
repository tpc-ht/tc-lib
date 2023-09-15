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
  {src: "https://rbaigctool-1307270943.cos.ap-beijing.myqcloud.com/2023-06-29/11-39-84999c2c-60c1-4668-a5e6-b6983d5ce87ed8408f11-bc45-4149-8d07-12354be9083f.png"},
  {src:"https://rbaigctool-1307270943.cos.ap-beijing.myqcloud.com/2023-06-29/11-30-84999c2c-60c1-4668-a5e6-b6983d5ce87e21aa9df6-38ed-4050-a353-856b2d378ffd.png",},
  {src:"https://rbaigctool-1307270943.cos.ap-beijing.myqcloud.com/2023-07-10/15-16-a93c3b52-5983-450b-86da-8825510bbeb46b25ec1d-d0bc-4255-a449-1defa771f6ae.png?imageMogr2/format/webp",},
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
            <img src={item.src} key={index} alt={item.src} />
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





