import {
  ApartmentOutlined,
  AppstoreOutlined,
  ContainerOutlined,
} from '@ant-design/icons';
import { BaseTreeSelect, IBaseTreeSelectProps } from '@tc-lib/components';
import { Typography } from 'antd';
import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef,
} from 'react';
const { Title } = Typography;
export type IBusinessTreeSelectProps = {
  type: 'org' | 'org1';
} & Partial<IBaseTreeSelectProps>;
const serverFun = () => {
  return new Promise(function (e) {
    e([
      {
        id: 1,
        name: '集团',
        path: '1',
        type: 1,
        pid: 0,
        icon: <ApartmentOutlined />,
        children: [
          {
            id: 3,
            name: '龙湖天街',
            path: '1,3',
            type: 5,
            pid: 1,
            icon: <ContainerOutlined />,
          },
          {
            id: 2,
            name: '浙北区域',
            path: '1,2',
            type: 2,
            icon: <AppstoreOutlined />,
            children: [
              {
                id: 12,
                name: '万达广场',
                path: '1,2,12',
                type: 5,
                pid: 2,
                icon: <ContainerOutlined />,
              },
            ],
            pid: 1,
          },
        ],
      },
    ]);
  });
};
const BusinessTreeConfig: { [key: string]: IBaseTreeSelectProps } = {
  org: {
    serverFun,
    fieldNames: { label: 'name', value: 'id', children: 'children' },
  },
  org1: {
    serverFun,
    fieldNames: { label: 'name', value: 'id', children: 'children' },
    topExpanded: false,
  },
};
const BusinessTreeSelect: ForwardRefExoticComponent<
  IBusinessTreeSelectProps & RefAttributes<any>
> = forwardRef(({ type, ...extra }, ref) => (
  <BaseTreeSelect {...BusinessTreeConfig[type]} {...extra} ref={ref} />
));
export default () => (
  <>
    <Title level={5}>基础</Title>
    <BusinessTreeSelect type="org" />
    <Title level={5}>全部展开</Title>
    <BusinessTreeSelect type="org1" />
  </>
);
