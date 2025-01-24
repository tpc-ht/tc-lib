import { Button, Tag, TimePicker, TimePickerProps, message } from 'antd';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
//RangePicker
import { PlusOutlined } from '@ant-design/icons';
import { isNum, isStr } from '@tc-lib/utils';
import dayjs from 'dayjs';

export interface IArrayTagsNumberProps {
  value?: any[] | undefined;
  onChange?: any;
  tagLength?: number;
  size?: 'large' | 'middle' | 'small';
  inputProps?: TimePickerProps;
}
const TagsTime: React.FC<IArrayTagsNumberProps> = (props) => {
  const { onChange, value, inputProps, size = 'middle', tagLength = 0 } = props;
  const [items, setItems] = useState<string[]>(value || []);
  const [timeValue, setTimeValue] = useState<any>(undefined);
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
    setTimeValue(undefined);
  };

  const valueFormat = useCallback((value: any) => {
    return value ? dayjs(value).format('HH:mm') : undefined;
  }, []);
  const valueParse = useCallback((value: string) => {
    if (!isStr(value)) return undefined;
    if (value.length == 8) return dayjs(`2000-01-01 ${value}`);
    return dayjs(`2000-01-01 ${value}:00`);
  }, []);

  const onOpenChange = (open: boolean, index?: number) => {
    if (!open && timeValue) {
      let val = valueFormat(timeValue);
      setItems((oldState: any) => {
        if (!val) return oldState;
        let existIndex = oldState.indexOf(val);
        if (isNum(index)) {
          if (existIndex === index) return oldState;
          if (existIndex === -1) {
            oldState[index] = val;
            return oldState;
          }
        }
        if (existIndex === -1) {
          return [...oldState, val];
        }
        setTimeout(() => message.warning('不能重复添加!'), 0);

        return oldState;
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
  //
  const TimeChange = (e: any) => {
    setTimeValue(e);
  };
  const tagSizeStyle = useMemo(() => {
    switch (size) {
      case 'large':
        return {
          height: '40px',
          lineHeight: '40px',
          fontSize: '16px',
        };
      case 'small':
        return {
          height: '24px',
          lineHeight: '24px',
          fontSize: '14px',
        };
      default:
        return {
          height: '32px',
          lineHeight: '32px',
          fontSize: '14px',
        };
    }
  }, [size]);
  return (
    <div>
      {items?.map((tag, index) => {
        if (editInputIndex === index) {
          return (
            <TimePicker
              ref={saveEditInputRef}
              value={timeValue}
              format="HH:mm"
              style={{ width: 180, marginRight: 8 }}
              key={tag}
              open={editInputIndex === index}
              onOpenChange={(e: boolean) => onOpenChange(e, index)}
              onChange={TimeChange}
              size={size}
              {...inputProps}
            />
          );
        }
        const tagElem = (
          <Tag
            key={tag}
            closable
            style={{ ...tagSizeStyle, cursor: 'pointer' }}
            color="processing"
            onClose={() => handleClose(tag)}
            onDoubleClick={(e) => {
              editInputHandle(index, tag);
              e.preventDefault();
            }}
          >
            {tag}
          </Tag>
        );
        return tagElem;
      })}
      {inputVisible && (
        <TimePicker
          ref={inputRef}
          value={timeValue}
          format="HH:mm"
          style={{ width: 180 }}
          onOpenChange={onOpenChange}
          onChange={TimeChange}
          size={size}
          {...inputProps}
        />
      )}
      {tagLength > 0
        ? items &&
          items?.length < tagLength &&
          !inputVisible && (
            <Button
              color="#108ee9"
              onClick={showInput}
              type="primary"
              //@ts-ignore
              icon={<PlusOutlined />}
              size={size}
            >
              添加
            </Button>
          )
        : !inputVisible && (
            <Button
              color="#108ee9"
              onClick={showInput}
              type="primary"
              //@ts-ignore
              icon={<PlusOutlined />}
              size={size}
            >
              添加
            </Button>
          )}
    </div>
  );
};

export default TagsTime;
