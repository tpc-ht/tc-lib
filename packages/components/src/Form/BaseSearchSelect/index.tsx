import { Disabled } from "@tc-lib/components";
import { getArrNodes, getAttrFromArr, isFn, isStr } from "@tc-lib/utils";
import { useRequest } from "ahooks";
import { Empty, Select, SelectProps, Spin, Typography } from "antd";
import { TextProps } from "antd/lib/typography/Text";
import React, {
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
export type IBaseSearchSelectProps = {
  /** 接口函数 */
  serverFun: (params: any) => Promise<any>;
  dataSource?: any[];
  /** 默认请求参数 */
  params?: { [key: string]: any };
  /** 是否多选 默认 true */
  isMultiple?: boolean;
  /** 防抖 默认 500ms*/
  debounceWait?: number;
  /** 每一项描述 */
  description?: string | ((row: any, index: number) => ReactNode);
  /** 自定义label */
  labelFormat?: (row: any, index: number) => ReactNode;
} & SelectProps;
export interface IBaseSearchSelectRef {
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
  IBaseSearchSelectProps & RefAttributes<any>
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
export const BaseSearchSelect: CompoundedComponent = forwardRef(
  (
    {
      serverFun = required(),
      params,
      fieldNames = { label: "label", value: "value", options: "options" },
      description,
      labelFormat,
      disabled,
      dataSource,
      debounceWait = 500,
      isMultiple = true,
      value,
      loading: load,
      ...extra
    },
    ref
  ) => {
    const [emptyText, SetEmptyText] = useState<string | undefined>(
      "请输入关键词进行搜索"
    );
    const { loading, data, run, refresh, mutate } = useRequest(
      (e) => serverFun({ ...params, ...e }),
      {
        manual: true,
        debounceWait,
        onSuccess() {
          SetEmptyText(undefined);
        },
        onError() {
          SetEmptyText(undefined);
        },
      }
    );
    const list = useMemo(
      () => (dataSource ? dataSource : data),
      [dataSource, data]
    );
    useImperativeHandle<any, IBaseSearchSelectRef>(
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
        let text = getAttrFromArr(getArrNodes(list, value, val), label, ",");
        return text || value;
      }
    }, [list, disabled, value, label, val]);

    const onSearch = (e: string) => {
      if (!e) return;
      mutate([]);
      SetEmptyText("加载中");
      run({ phoneKeyword: e });
    };
    const onDropdownVisibleChange = (e: boolean) => {
      if (e) SetEmptyText("请输入关键词进行搜索");
    };
    return disabled ? (
      <Disabled value={disValue} />
    ) : (
      <Select
        style={{ width: "100%" }}
        optionLabelProp={label}
        placeholder="请选择"
        allowClear
        showSearch
        onSearch={onSearch}
        showArrow={false}
        filterOption={false}
        loading={loading || load}
        onDropdownVisibleChange={onDropdownVisibleChange}
        notFoundContent={
          <Spin size="small" spinning={loading} delay={200}>
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description={emptyText}
            />
          </Spin>
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
  }
);
