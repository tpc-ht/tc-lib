import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";
import { isFullArr, isFullObj, isStr } from "@tc-lib/test";
import { Space, Tag, Typography } from "antd";
import csn from "classnames";
import React, { CSSProperties, Key, memo, useMemo } from "react";
import "./index.less";

import { usePrefix } from "../../hooks";
const { Paragraph } = Typography;
export interface IDisabledProps {
  value?: any;
  // gap?: string;
  isCopy?: boolean;
  ellipsisRows?: number;
  className?: string;
  dangerouslySetInnerHTML?: { __html: string };
  style?: React.CSSProperties;
}

const getTag = (arr: any[], name?: string) =>
  arr?.map((e) => (
    <Tag color="processing" key={name ? e[name] : e}>
      {name ? e[name] : e}
    </Tag>
  )) || "-";

export const Disabled = memo(
  ({
    value,
    isCopy,
    ellipsisRows,
    dangerouslySetInnerHTML,
    className,
    ...e
  }: IDisabledProps) => {
    const prefix = usePrefix("preview-text");
    const valStr = useMemo(() => {
      switch (Object.prototype.toString.call(value)) {
        case "[object Array]":
          return getTag(value);
        default:
          return value;
      }
    }, [value]);
    if (isFullObj(dangerouslySetInnerHTML))
      return (
        <div
          className={csn("form-preview-text", className)}
          {...e}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML || { __html: "" }}
        />
      );
    return (
      <div className={csn(prefix, className)} {...e}>
        <Paragraph
          copyable={isCopy && isStr(value) ? { text: value } : false}
          style={{ marginBottom: 0, width: "99.9%", lineHeight: "inherit" }}
          ellipsis={{
            rows: ellipsisRows || 1,
            expandable: true,
          }}
        >
          {valStr || "-"}
        </Paragraph>
      </div>
    );
  }
);

interface IBooleanDisableProps {
  value?: string;
  checkedChildren?: string;
  unCheckedChildren?: string;
  className?: string;
  style?: CSSProperties;
  checkedValue?: [Key, Key];
}
export const BooleanDisable = memo(
  ({
    value,
    className,
    checkedValue,
    checkedChildren = "是",
    unCheckedChildren = "否",
    ...e
  }: IBooleanDisableProps) => {
    const prefix = usePrefix("preview-text");
    const switchValue = useMemo(() => {
      if (isFullArr(checkedValue)) {
        const [v1] = checkedValue;
        return value === v1;
      }
      return value;
    }, [checkedValue, value]);
    return (
      <div className={csn(prefix, className)} {...e}>
        {switchValue ? (
          <Space align="baseline" size={6}>
            <CheckCircleFilled style={{ color: "#6abf40", fontSize: 14 }} />
            <span>{checkedChildren}</span>
          </Space>
        ) : (
          <Space align="start" size={6}>
            <CloseCircleFilled style={{ color: "#ff4d4f", fontSize: 14 }} />
            <span>{unCheckedChildren}</span>
          </Space>
        )}
      </div>
    );
  }
);
