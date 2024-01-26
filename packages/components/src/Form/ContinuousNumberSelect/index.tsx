import { isArr, makeArray } from '@tc-lib/utils';
import { Select, SelectProps } from 'antd';
import React, { useCallback, useMemo, useRef } from 'react';
import { usePrefix } from '../../hooks';
import { Disabled } from '../Disabled';
import './index.less';
export const continuousNumber = (nums: number[]) => {
  if (!isArr(nums)) return '';
  nums.sort((a, b) => a - b); // 对数组进行升序排序
  let result: any[] = [];
  let start = nums[0];
  let end = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === end + 1) {
      end = nums[i];
    } else {
      if (start !== end) {
        result.push(start + '-' + end);
      } else {
        result.push(start);
      }
      start = nums[i];
      end = nums[i];
    }
  }
  if (start !== end) {
    result.push(start + '-' + end);
  } else {
    result.push(start);
  }
  return result.join(',');
};
export interface ContinuousNumberSelectProps extends SelectProps {
  optionType?: 'day' | 'week';
}

console.log('isArr-外', isArr);
export const ContinuousNumberSelect = ({
  value,
  style,
  optionType = 'day',
  onChange,
  disabled,
  ...e
}: ContinuousNumberSelectProps) => {
  const valueRef = useRef(value);
  const prefix = usePrefix('continuous-number-select');
  const onSelectChange = useCallback(
    (e, p) => {
      valueRef.current = e;
      onChange?.(e, p);
    },
    [onChange],
  );
  const strValue = useMemo(() => {
    console.log('isArr-内', isArr);
    return optionType === 'week'
      ? continuousNumber(value)
          .replace(/1/g, '星期一')
          .replace(/2/g, '星期二')
          .replace(/3/g, '星期三')
          .replace(/4/g, '星期四')
          .replace(/5/g, '星期五')
          .replace(/6/g, '星期六')
          .replace(/7/g, '星期日')
      : continuousNumber(value);
  }, [value, optionType]);

  const options = useMemo(() => {
    const weekOptions = ['一', '二', '三', '四', '五', '六', '日'];
    switch (optionType) {
      case 'day':
        return makeArray(31).map((e, i) => ({ label: i + 1, value: i + 1 }));
      case 'week':
        return makeArray(7).map((e, i) => ({
          label: `星期${weekOptions[i]}`,
          value: i + 1,
        }));
      default:
        return [];
    }
  }, [optionType]);

  const renderTag = useCallback(
    (props: { value: number }) => {
      if (!valueRef.current || valueRef.current[0] !== Number(props.value)) {
        return <></>;
      }
      return <div>{strValue}</div>;
    },
    [strValue],
  );
  const onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  if (disabled) return <Disabled value={strValue} style={style} {...e} />;
  return (
    <>
      {/* <SelectStyle /> */}
      <Select
        placeholder="请选择"
        style={{ width: '100%', ...style }}
        options={options}
        {...e}
        value={value}
        allowClear
        dropdownMatchSelectWidth={false}
        onChange={onSelectChange}
        tagRender={renderTag}
        onClick={onClick}
        popupClassName={prefix + '-dropdown'}
        mode={'multiple'}
        dropdownRender={(originNode) => {
          return optionType === 'week' ? (
            originNode
          ) : (
            <div className={prefix + '-dropdown-container'}>{originNode}</div>
          );
        }}
      />
    </>
  );
};
