import { Disabled } from "@tc-lib/components";
import { getAttrFromArr, getTreeNodes, isArr } from "@tc-lib/utils";
import { useRequest } from "ahooks";
import { TreeSelect, TreeSelectProps } from "antd";
import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  useImperativeHandle,
  useMemo,
} from "react";
type SelectType = "radio" | "multiple" | "checkbox";
export interface IBaseTreeSelectProps extends TreeSelectProps {
  /** 接口函数 */
  serverFun: (params: any) => Promise<any>;
  /** 下拉数据 外部传递避免重复渲染出现的多次请求 */
  dataSource?: any[];
  /** 默认请求参数 */
  params?: { [key: string]: any };
  /** 是否手动请求 默认false */
  manual?: boolean;
  /** 选择类型 */
  selectType?: SelectType;
}
export interface IBaseTreeSelectRef {
  refresh(): void;
  run(...params: any): void;
  mutate(data?: any | ((oldData?: any) => any | undefined)): void;
}
const required = () => {
  throw new Error("This component requires an interface function.");
};
type CompoundedComponent = ForwardRefExoticComponent<
  IBaseTreeSelectProps & RefAttributes<any>
>;
const getMultiple = (type: SelectType): any => {
  switch (type) {
    case "radio":
      return {};
    case "multiple":
      return {
        multiple: true,
        mode: "multiple",
        maxTagCount: "responsive",
      };
    case "checkbox":
      return {
        treeCheckable: true,
        maxTagCount: "responsive",
        showCheckedStrategy: TreeSelect.SHOW_PARENT,
      };
  }
};

// @ts-ignore
export const BaseTreeSelect: CompoundedComponent = React.forwardRef(
  (
    {
      serverFun = required(),
      params,
      manual = false,
      fieldNames,
      dataSource,
      selectType = "radio",
      loading: load,
      value,
      disabled,
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
    const expandedKeys = useMemo(() => {
      return data?.[0]?.value ? [data?.[0]?.value] : [];
    }, [data]);

    useImperativeHandle<any, IBaseTreeSelectRef>(
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

    const disValue: any = useMemo(() => {
      if (disabled) {
        let text = getAttrFromArr(
          getTreeNodes(isOpt ? dataSource : data, value, fieldNames),
          fieldNames?.label || "label",
          ","
        );
        return text || value;
      }
    }, [isOpt, dataSource, data, disabled, value]);

    return disabled ? (
      <Disabled value={disValue} />
    ) : (
      <TreeSelect
        allowClear
        showSearch
        getCalendarContainer={(triggerNode) => triggerNode.parentNode}
        fieldNames={fieldNames}
        value={value}
        loading={load || loading}
        style={{ width: "100%" }}
        placeholder="请选择"
        treeDefaultExpandAll
        treeData={isOpt ? dataSource : data}
        treeIcon //
        treeNodeFilterProp="label"
        treeLine={{ showLeafIcon: false }}
        treeDefaultExpandedKeys={expandedKeys}
        {...getMultiple(selectType)}
        {...extra}
      />
    );
  }
);
