import { Button, Tag, TimePicker, TimeRangePickerProps, message } from 'antd';
import React, { useCallback, useEffect, useRef, useState } from 'react';
//RangePicker
import { PlusOutlined } from '@ant-design/icons';
import { isFullArr, isNum, isStr } from '@tc-lib/utils';
import dayjs from 'dayjs';

export interface ITagsTimeRangeProps {
  value?: any[] | undefined;
  onChange?: any;
  tagLength?: number;
  inputProps?: TimeRangePickerProps;
}
const TagsTimeRange: React.FC<ITagsTimeRangeProps> = (props) => {
  const { onChange, value, inputProps, tagLength = 0 } = props;
  const [items, setItems] = useState<string[]>(value || []);
  const [timeValue, setTimeValue] = useState<any>([]);
  const [inputVisible, setInputVisible] = useState<boolean>(false);
  const [editInputIndex, setEditInputIndex] = useState<number>(-1);

  const inputRef = useRef<any>(null);
  const saveEditInputRef = useRef<any>();

  const handleClose = async (removedTag: string) => {
    const currItems = items?.filter((e) => e !== removedTag);
    onChange?.(currItems);
  };
  useEffect(() => {
    setItems(value || []);
  }, [value]);
  const showInput = () => {
    setInputVisible(true);
    setTimeValue([]);
  };

  const valueFormat = useCallback((value: any[]) => {
    const ds = isFullArr(value)
      ? value.map((e) => dayjs(e).format('HH:mm'))
      : [];
    return ds.join('-');
  }, []);
  const valueParse = useCallback((value: string) => {
    return isStr(value)
      ? value.split('-').map((e) => dayjs(`2000-01-01 ${e}:00`))
      : [];
  }, []);

  const onOpenChange = (open: boolean, index?: number) => {
    if (!open && isFullArr(timeValue)) {
      let val = timeValue;
      setItems((oldState: any) => {
        const strVal = valueFormat(val);
        if (!strVal) return oldState;
        if (isNum(index)) {
          const newTags = [...oldState];
          newTags[index] = strVal;
          return newTags;
        }
        if (strVal && !items.includes(strVal)) {
          return [...oldState, strVal];
        } else {
          message.warning('不能重复添加!');
          return oldState;
        }
      });
      setInputVisible(false);
      setEditInputIndex(-1);
    }
  };

  useEffect(() => {
    if (items && items.length) {
      onChange?.(items);
    }
  }, [items]);

  useEffect(() => {
    if (inputVisible && inputRef.current) inputRef.current.focus();
  }, [inputVisible]);

  useEffect(() => {
    if (saveEditInputRef.current) saveEditInputRef.current.focus();
  }, [editInputIndex]);

  const editInputHandle = (index: number, strVal: string) => {
    setEditInputIndex(index);
    setTimeValue(valueParse(strVal));
  };

  const TimeChange = (e: any) => {
    setTimeValue(e);
  };
  return (
    <div>
      {items?.map((tag, index) => {
        if (editInputIndex === index) {
          return (
            <TimePicker.RangePicker
              //@ts-ignore
              ref={saveEditInputRef}
              value={timeValue}
              format="HH:mm"
              style={{ width: 180, marginRight: 8 }}
              key={tag}
              onOpenChange={(e: boolean) => onOpenChange(e, index)}
              onChange={TimeChange}
              {...inputProps}
            />
          );
        }
        const tagElem = (
          <Tag
            key={tag}
            closable
            style={{ lineHeight: '30px' }}
            color="processing"
            onClose={() => handleClose(tag)}
          >
            <span
              onDoubleClick={(e) => {
                editInputHandle(index, tag);
                e.preventDefault();
              }}
            >
              {tag}
            </span>
          </Tag>
        );
        return tagElem;
      })}
      {inputVisible && (
        <TimePicker.RangePicker
          //@ts-ignore
          ref={inputRef}
          value={timeValue}
          format="HH:mm"
          style={{ width: 180 }}
          onOpenChange={onOpenChange}
          onChange={TimeChange}
          {...inputProps}
        />
      )}
      {tagLength > 0
        ? items?.length < tagLength &&
          !inputVisible && (
            <Button
              color="#108ee9"
              onClick={showInput}
              type="primary"
              icon={<PlusOutlined />}
            >
              添加
            </Button>
          )
        : !inputVisible && (
            <Button
              color="#108ee9"
              onClick={showInput}
              type="primary"
              icon={<PlusOutlined />}
            >
              添加
            </Button>
          )}
    </div>
  );
};

export default TagsTimeRange;
