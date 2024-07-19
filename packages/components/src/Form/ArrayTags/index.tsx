import {
  InputNumberProps,
  InputProps,
  TimePickerProps,
  TimeRangePickerProps,
} from 'antd';
import React from 'react';
import { Disabled } from '../Disabled';
import TagsInput from './components/TagsInput';
import TagsNumberInput from './components/TagsNumberInput';
import TagsTime from './components/TagsTime';
import TagsTimeRange from './components/TagsTimeRange';

export interface ITagArrayItemsProps {
  value?: any[];
  onChange?: any;
  type: 'input' | 'number' | 'time' | 'timeRange';
  /** 最大标签数 */
  tagLength?: number;
  /** 禁用  */
  disabled?: boolean;
  size?: 'large' | 'middle' | 'small';
  /** 输入框属性  详见 antd */
  inputProps?: InputProps &
    InputNumberProps &
    TimeRangePickerProps &
    TimePickerProps;
}
export const ArrayTags: React.FC<ITagArrayItemsProps> = ({
  type = 'input',
  disabled,
  value,
  size,
  ...e
}) => {
  if (disabled) return <Disabled value={value} type="tag" size={size} />;
  return (
    <div>
      {type === 'input' && <TagsInput value={value} size={size} {...e} />}
      {type === 'number' && (
        <TagsNumberInput value={value} size={size} {...e} />
      )}
      {type === 'timeRange' && (
        <TagsTimeRange value={value} size={size} {...e} />
      )}
      {type === 'time' && <TagsTime value={value} size={size} {...e} />}
    </div>
  );
};
