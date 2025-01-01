import { getAttrFromArr, getTreeNodes, isArr } from '@tc-lib/utils';
import { useRequest } from 'ahooks';
import { Cascader } from 'antd';
import { CascaderProps, DefaultOptionType } from 'antd/lib/cascader';
import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef,
  useImperativeHandle,
  useMemo,
} from 'react';
import { Disabled } from '../Disabled';

export type IBaseCascaderProps =
  | ({
      /** 接口函数 */
      serverFun: (params: any) => Promise<any>;
      /** 下拉数据 外部传递避免重复渲染出现的多次请求 */
      dataSource?: any[];
      /** 默认请求参数 */
      params?: { [key: string]: any };
      /** 是否手动请求 默认false */
      manual?: boolean;
    } & CascaderProps<any>)
  | any;

export interface IBaseCascaderRef {
  refresh(): void;
  run(...params: any): void;
  mutate(data?: any | ((oldData?: any) => any | undefined)): void;
}
const required = () => {
  throw new Error('This component requires an interface function.');
};
type CompoundedComponent = ForwardRefExoticComponent<
  IBaseCascaderProps & RefAttributes<any>
>;
// @ts-ignore
export const BaseCascader: CompoundedComponent = forwardRef(
  (
    {
      serverFun = required(),
      params,
      manual = false,
      dataSource,
      loading: load,
      fieldNames,
      value,
      disabled,
      ...extra
    },
    ref,
  ) => {
    const isOpt = useMemo(() => isArr(dataSource), [dataSource]);
    const { loading, data, run, refresh, mutate } = useRequest(
      (e) => serverFun({ ...params, ...e }),
      {
        manual: isOpt || manual,
      },
    );

    useImperativeHandle<any, IBaseCascaderRef>(
      ref,
      () => ({
        run: (e) => {
          mutate([]);
          run(e);
        },
        refresh: () => {
          mutate([]);
          refresh?.();
        },
        mutate,
      }),
      [run, refresh, mutate],
    );

    const filter = (inputValue: string, path: DefaultOptionType[]) =>
      path.some(
        (option) =>
          (option[fieldNames?.label || 'label'] as string)
            .toLowerCase()
            .indexOf(inputValue.toLowerCase()) > -1,
      );
    const disValue = useMemo(() => {
      if (disabled) {
        let text = getAttrFromArr(
          getTreeNodes(isOpt ? dataSource : data, value as any, fieldNames),
          fieldNames?.label || 'label',
          ',',
        );
        return text || value;
      }
    }, [isOpt, dataSource, data, disabled, value]);
    return disabled ? (
      <Disabled value={disValue} />
    ) : (
      <Cascader
        loading={load || loading}
        options={isOpt ? dataSource : data}
        style={{ width: '100%' }}
        placeholder="请选择"
        value={value}
        fieldNames={fieldNames}
        allowClear
        showSearch={{ filter }}
        {...extra}
      />
    );
  },
);
