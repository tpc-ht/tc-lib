import {
  InputNumberProps,
  InputProps,
  Tag,
  TimePickerProps,
  TimeRangePickerProps,
} from 'antd';
import React, { useMemo } from 'react';
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
  /** 输入框属性  详见 antd */
  inputProps?: InputProps &
    InputNumberProps &
    TimeRangePickerProps &
    TimePickerProps;
}
const getTag = (arr: any[], name?: string) =>
  arr?.map((e) => (
    <Tag
      color="processing"
      style={{ lineHeight: '30px' }}
      key={name ? e[name] : e}
    >
      {name ? e[name] : e}
    </Tag>
  )) || '-';
export const ArrayTags: React.FC<ITagArrayItemsProps> = ({
  type = 'input',
  disabled,
  value,
  ...e
}) => {
  const valStr = useMemo(() => {
    if (disabled && value) {
      return getTag(value);
    }
    return '';
  }, [value, disabled]);
  if (disabled) return <Disabled bordered={!valStr} value={valStr} />;
  return (
    <div>
      {type === 'input' && <TagsInput value={value} {...e} />}
      {type === 'number' && <TagsNumberInput value={value} {...e} />}
      {type === 'timeRange' && <TagsTimeRange value={value} {...e} />}
      {type === 'time' && <TagsTime value={value} {...e} />}
    </div>
  );
};
