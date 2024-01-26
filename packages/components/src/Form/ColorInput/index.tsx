import { Input, Popover } from 'antd';
import React, { useRef } from 'react';
import { SketchPicker } from 'react-color';
import { usePrefix } from '../../hooks';
import { Disabled } from '../Disabled';
import './index.less';

export interface IColorInputProps {
  value?: string;
  onChange?: (color: string) => void;
  disabled?: boolean;
}
const colorBox = (value: string) =>
  value ? (
    <Space align="center" size={6}>
      <div
        style={{
          height: 15,
          width: 15,
          backgroundColor: value,
        }}
      />
      {value}
    </Space>
  ) : undefined;
export const ColorInput: React.FC<IColorInputProps> = ({
  value,
  onChange,
  disabled,
}) => {
  const container = useRef<HTMLDivElement>();
  const prefix = usePrefix('color-input');
  const color = value as string;

  if (disabled) return <Disabled value={colorBox(color)} />;
  return (
    <div ref={container} className={prefix}>
      <Input
        value={value}
        onChange={(e) => {
          onChange?.(e.target.value);
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
                  onChange?.(`rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`);
                }}
              />
            }
          >
            <div
              className={prefix + '-color-tips'}
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
