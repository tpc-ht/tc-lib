import {
  BaseSearchSelect,
  FlexSpace,
  IBaseSearchSelectProps,
} from '@tc-lib/components';
import { Typography } from 'antd';
import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef,
} from 'react';

export type IBusinessSearchSelectProps = {
  type: 'member' | 'description' | 'cusDescription';
} & Partial<IBaseSearchSelectProps>;
const { Title } = Typography;
const serverFun = () => {
  return new Promise(function (e) {
    setTimeout(
      () =>
        e([
          {
            name: '张一',
            id: '1',
            tip: '描述描述',
          },
          {
            name: '张二',
            id: '2',
            tip: '描述描述',
          },
          {
            name: '张三',
            id: '3',
            tip: '描述描述',
          },
        ]),
      1000,
    );
  });
};
const BusinessConfig: { [key: string]: IBaseSearchSelectProps } = {
  member: {
    serverFun,
    fieldNames: { label: 'name', value: 'id' },
  },
};
const BusinessSearchSelect: ForwardRefExoticComponent<
  IBusinessSearchSelectProps & RefAttributes<any>
> = forwardRef(({ type, ...extra }, ref) => (
  <BaseSearchSelect {...BusinessConfig[type]} {...extra} ref={ref} />
));
export default () => (
  <FlexSpace direction="column">
    <Title level={5}>基础</Title>
    <BusinessSearchSelect type="member" />
    <BusinessSearchSelect
      type="member"
      value="1"
      description={(e) => `电话号码：${e.label || '-'}`}
      isMultiple={false}
      dataSource={[
        {
          label: '张一',
          value: '1',
        },
      ]}
    />
  </FlexSpace>
);
