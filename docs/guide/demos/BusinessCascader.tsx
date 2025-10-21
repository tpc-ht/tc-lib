import { BaseCascader, IBaseCascaderProps } from '@tc-lib/components';
import { Typography } from 'antd';
import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef,
  memo,
} from 'react';
const { Title } = Typography;
export type IBusinessCascaderProps = {
  type: 'build';
} & Partial<IBaseCascaderProps>;

const serverFun = () => {
  return new Promise(function (e) {
    e([
      {
        id: 1,
        name: 'A栋',
        children: [
          {
            id: 2,
            name: '一层',
          },
          {
            id: 3,
            name: '二层',
          },
          {
            id: 4,
            name: '三层',
          },
        ],
      },
      {
        id: 5,
        name: 'B栋',
        children: [
          {
            id: 6,
            name: '一层',
          },
          {
            id: 7,
            name: '二层',
          },
          {
            id: 8,
            name: '三层',
          },
        ],
      },
    ]);
  });
};
const BusinessConfig: { [key: string]: IBaseCascaderProps } = {
  build: {
    serverFun,
    fieldNames: { label: 'name', value: 'id', children: 'children' },
  },
};
/** 全局公用可配置下拉项组件 */
const BusinessCascader: ForwardRefExoticComponent<
  IBusinessCascaderProps & RefAttributes<any>
> = memo(
  forwardRef(({ type, ...extra }, ref) => {
    return <BaseCascader {...BusinessConfig[type]} {...extra} ref={ref} />;
  }),
);

export default () => (
  <>
    <Title level={5}>基础</Title>
    <BusinessCascader type="build" />
  </>
);
