import { usePrefix } from "@tc-lib/components";
import { Input, Popover } from "antd";
import React, { useRef } from "react";
import { SketchPicker } from "react-color";
import "./index.less";

export interface IColorInputProps {
  value?: string;
  onChange?: (color: string) => void;
}

export const ColorInput: React.FC<IColorInputProps> = (props) => {
  const container = useRef<HTMLDivElement>();
  const prefix = usePrefix("color-input");
  const color = props.value as string;
  return (
    <div ref={container} className={prefix}>
      <Input
        value={props.value}
        onChange={(e) => {
          props.onChange?.(e.target.value);
        }}
        allowClear
        placeholder="颜色"
        prefix={
          <Popover
            autoAdjustOverflow
            trigger="click"
            overlayInnerStyle={{ padding: 0 }}
            getPopupContainer={() => container.current}
            content={
              <SketchPicker
                color={color}
                onChange={({ rgb }) => {
                  props.onChange?.(`rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`);
                }}
              />
            }
          >
            <div
              className={prefix + "-color-tips"}
              style={{
                backgroundColor: color,
              }}
            ></div>
          </Popover>
        }
      />
    </div>
  );
};
