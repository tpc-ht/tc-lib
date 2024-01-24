import { Disabled } from '@tc-lib/components';
import { getArrNodes, getAttrFromArr, isArr, isFn, isStr } from '@tc-lib/utils';
import { useRequest } from 'ahooks';
import { Select, SelectProps, Typography } from 'antd';
import { TextProps } from 'antd/lib/typography/Text';
import React, {
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
  forwardRef,
  useImperativeHandle,
  useMemo,
} from 'react';

// let
export type IBaseSelectProps = {
  /** 接口函数 */
  serverFun: (params?: any) => Promise<any>;
  /** 下拉数据 外部传递避免重复渲染出现的多次请求 */
  dataSource?: any[];
  /** 默认请求参数 */
  params?: { [key: string]: any };
  /** 是否手动请求 默认false */
  manual?: boolean;
  /** 是否多选 */
  isMultiple?: boolean;
  /** 每一项描述 */
  description?: string | ((row: any, index: number) => ReactNode);
  /** 自定义lobel */
  labelFormat?: (row: any, index: number) => ReactNode;
} & SelectProps;
export interface IBaseSelectRef {
  refresh(): void;
  run(...params: any): void;
  mutate(data?: any | ((oldData?: any) => any | undefined)): void;
}
const required = () => {
  throw new Error('This component requires an interface function.');
};

const { Option } = Select;
const { Text } = Typography;
export const DescriptionText = (props: TextProps) => (
  <Text type="secondary" {...props} />
);
type CompoundedComponent = ForwardRefExoticComponent<
  IBaseSelectProps & RefAttributes<any>
> & {
  DescriptionText: typeof DescriptionText;
};
const getMultiple = (isMultiple = true): any =>
  isMultiple
    ? {
        mode: 'multiple',
        maxTagCount: 'responsive',
      }
    : undefined;
// @ts-ignore
export const BaseSelect: CompoundedComponent = forwardRef(
  (
    {
      serverFun = required(),
      params,
      manual = false,
      fieldNames = { label: 'label', value: 'value', options: 'options' },
      description,
      labelFormat,
      disabled,
      isMultiple = true,
      value,
      dataSource,
      loading: load,
      className,
      style,
      ...extra
    },
    ref,
  ) => {
    const isOpt = useMemo(() => isArr(dataSource), [dataSource]);
    const { label = 'label', value: val = 'value' } = useMemo(
      () => fieldNames,
      [fieldNames],
    );

    const { loading, data, run, refresh, mutate } = useRequest(
      (e) => serverFun({ ...params, ...e }),
      {
        manual: isOpt || manual,
      },
    );
    const list = useMemo(
      () => (isOpt ? dataSource : data),
      [isOpt, dataSource, data],
    );
    useImperativeHandle<any, IBaseSelectRef>(
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
    const getDescriptionText = (e: any, index: number) => {
      if (isStr(description)) return e?.[description];
      if (isFn(description)) return description(e, index);
    };
    const disValue = useMemo(() => {
      if (disabled) {
        let text = getAttrFromArr(getArrNodes(list, value, val), label, ',');
        return text || value;
      }
    }, [list, disabled, value]);

    return disabled ? (
      <Disabled value={disValue} className={className} style={style} />
    ) : (
      <Select
        loading={load || loading}
        optionLabelProp={label}
        style={{ width: '100%', ...style }}
        className={className}
        placeholder="请选择"
        allowClear
        showSearch
        // getCalendarContainer={(triggerNode) => triggerNode.parentNode}
        filterOption={(input, option) =>
          ((option?.[label] ?? '') as any)
            .toLowerCase()
            .includes(input.toLowerCase())
        }
        value={value}
        disabled={disabled}
        fieldNames={!(description || labelFormat) ? fieldNames : undefined}
        options={!(description || labelFormat) ? list : undefined}
        {...getMultiple(isMultiple)}
        {...extra}
      >
        {(description || labelFormat) &&
          list?.map((e: any, index: number) => {
            const v = e[val];
            const l = labelFormat ? labelFormat(e, index) : e[label];
            return (
              <Option value={v} key={v} label={l} {...e}>
                <div>
                  <Text>{l}</Text>
                </div>
                {description ? (
                  <DescriptionText>
                    {getDescriptionText(e, index)}
                  </DescriptionText>
                ) : null}
              </Option>
            );
          })}
      </Select>
    );
  },
);
