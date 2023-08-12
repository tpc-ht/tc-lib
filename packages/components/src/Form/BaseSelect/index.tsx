import { Disabled } from "@tc-lib/components";
import { getArrNodes, getAttrFromArr, isArr, isFn, isStr } from "@tc-lib/utils";
import { useRequest } from "ahooks";
import { Select, SelectProps, Typography } from "antd";
import { TextProps } from "antd/lib/typography/Text";
import React, {
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
  forwardRef,
  useImperativeHandle,
  useMemo,
} from "react";
export interface IBaseSelectProps extends SelectProps {
  /** 接口函数 */
  serverFun: (params: any) => Promise<any>;
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
}
export interface IBaseSelectRef {
  refresh(): void;
  run(...params: any): void;
  mutate(data?: any | ((oldData?: any) => any | undefined)): void;
}
const required = () => {
  throw new Error("This component requires an interface function.");
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
        mode: "multiple",
        maxTagCount: "responsive",
      }
    : undefined;
// @ts-ignore
export const BaseSelect: CompoundedComponent = forwardRef(
  (
    {
      serverFun = required(),
      params,
      manual = false,
      fieldNames = { label: "label", value: "value", options: "options" },
      description,
      labelFormat,
      disabled,
      isMultiple = true,
      value,
      dataSource,
      loading: load,
      ...extra
    },
    ref
  ) => {
    const isOpt = useMemo(() => isArr(dataSource), [dataSource]);
    const { loading, data, run, refresh, mutate } = useRequest(
      (e) => serverFun({ ...params, ...e }),
      {
        manual: isOpt || manual,
      }
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
      [run, refresh, mutate]
    );
    const { label = "label", value: val = "value" } = useMemo(
      () => fieldNames,
      [fieldNames]
    );
    const getDescriptionText = (e: any, index: number) => {
      if (isStr(description)) return e?.[description];
      if (isFn(description)) return description(e, index);
    };
    const disValue = useMemo(() => {
      if (disabled) {
        let text = getAttrFromArr(
          getArrNodes(isOpt ? dataSource : data, value, val),
          label,
          ","
        );
        return text || value;
      }
    }, [isOpt, dataSource, data, disabled, value]);

    return disabled ? (
      <Disabled value={disValue} />
    ) : (
      <Select
        loading={load || loading}
        optionLabelProp="label"
        style={{ width: "100%" }}
        placeholder="请选择"
        allowClear
        showSearch
        // getCalendarContainer={(triggerNode) => triggerNode.parentNode}
        filterOption={(input, option) =>
          ((option?.label ?? "") as any)
            .toLowerCase()
            .includes(input.toLowerCase())
        }
        value={value}
        disabled={disabled}
        {...getMultiple(isMultiple)}
        {...extra}
      >
        {/* {!isFullArr(isOpt ? dataSource : data) || error ? (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={
              <span>
                暂无数据{' '}
                <a href="#API" onClick={refresh}>
                  刷新
                </a>
              </span>
            }
          />
        ) : (
          
        )} */}
        {(isOpt ? dataSource : data)?.map((e: any, index: number) => {
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
  }
);
