import { BaseSelect, IBaseSelectProps } from '@tc-lib/components';
import { Typography } from 'antd';
import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef,
  useState,
} from 'react';

export type IBusinessSelectProps = {
  type: 'member' | 'description' | 'cusDescription' | 'unique';
} & Partial<IBaseSelectProps>;
const { Title } = Typography;
const serverFun = () => {
  return new Promise(function (e) {
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
    ]);
  });
};
const BusinessConfig: { [key: string]: IBaseSelectProps } = {
  member: {
    serverFun,
    fieldNames: { label: 'name', value: 'id' },
  },
  description: {
    serverFun,
    fieldNames: { label: 'name', value: 'id' },
    description: 'tip',
  },
  cusDescription: {
    serverFun,
    fieldNames: { label: 'name', value: 'id' },
    description: (e, index) => `自定义描述：${e.name}-${index}`,
  },
  unique: {
    serverFun: () =>
      new Promise(function (e) {
        e([
          {
            name: '张一',
            id: '1',
            tip: '描述描述',
          },
        ]);
      }),
    isMultiple: false,
    fieldNames: { label: 'name', value: 'id' },
    isUniqueSelect: true,
  },
};
const BusinessSelect: ForwardRefExoticComponent<
  IBusinessSelectProps & RefAttributes<any>
> = forwardRef(({ type, ...extra }, ref) => (
  <BaseSelect {...BusinessConfig[type]} {...extra} ref={ref} />
));
export default () => {
  const [value, setValue] = useState<string>();
  const [values, setValues] = useState<string>();
  return (
    <>
      <Title level={5}>基础</Title>
      <BusinessSelect type="member" />

      <Title level={5}>描述</Title>
      <BusinessSelect type="description" />
      <Title level={5}>自定义描述</Title>
      <BusinessSelect type="cusDescription" />
      <Title level={5}>唯一默认选中</Title>
      <BusinessSelect type="unique" value={value} onChange={setValue} />
      <Title level={5}>唯一默认选中 多选</Title>
      <BusinessSelect
        type="unique"
        isMultiple
        value={values}
        onChange={setValues}
      />
    </>
  );
};
