import { Button, Input, InputProps, Tag, Tooltip, message } from 'antd';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import { PlusOutlined } from '@ant-design/icons';

export interface ITagArrayItemsProps {
  value?: string[];
  onChange?: any;
  size?: 'large' | 'middle' | 'small';
  /** 最大标签数 */
  tagLength?: number;
  /** 输入框属性 详见 antd */
  inputProps?: InputProps;
}
const TagsInput: React.FC<ITagArrayItemsProps> = (props) => {
  const { onChange, value, inputProps, size = 'middle', tagLength = 0 } = props;
  const [items, setItems] = useState<string[]>(value || []);
  const [inputVisible, setInputVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [editInputIndex, setEditInputIndex] = useState<number>(-1);
  const [editInputValue, setEditInputValue] = useState<string>('');

  const inputRef = useRef<any>(null);
  const saveEditInputRef = useRef<any>();

  const handleClose = async (removedTag: string) => {
    const currItems = items?.filter((e) => e !== removedTag);
    setItems(currItems);
    onChange?.(currItems);
  };
  useEffect(() => {
    setItems(value || []);
  }, [value]);
  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleEditInputChange = (e: any) => {
    setEditInputValue(e.target.value);
  };

  const handleEditInputConfirm = () => {
    setItems((oldState: any) => {
      let existIndex = oldState.indexOf(editInputValue);
      if (existIndex === editInputIndex) return oldState;
      if (existIndex === -1) {
        oldState[editInputIndex] = editInputValue;
        return oldState;
      }
      message.warning('不能重复添加!');
      return oldState;
    });
    setEditInputIndex(-1);
    setEditInputValue('');
  };

  const handleInputConfirm = () => {
    if (inputValue) {
      setItems((oldState: any) => {
        if (items?.indexOf(inputValue) === -1) {
          return [...oldState, inputValue];
        } else {
          message.warning('不能重复添加!');
          return oldState;
        }
      });
    }
    setInputVisible(false);
    setInputValue('');
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
  }, [editInputIndex, editInputValue]);

  const editInputHandle = (index: number, tag: string) => {
    setEditInputIndex(index);
    setEditInputValue(tag);
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
    <>
      {items?.map((tag, index) => {
        if (editInputIndex === index) {
          return (
            <Input
              //@ts-ignore
              ref={saveEditInputRef}
              key={tag}
              placeholder="请输入"
              style={{ width: 88, marginRight: 8 }}
              value={editInputValue}
              onChange={handleEditInputChange}
              onBlur={handleEditInputConfirm}
              onPressEnter={handleEditInputConfirm}
              size={size}
              {...inputProps}
            />
          );
        }
        const isLongTag = tag.length > 10;
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
            {isLongTag ? `${tag.slice(0, 10)}...` : tag}
          </Tag>
        );
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })}
      {inputVisible && (
        <Input
          //@ts-ignore
          ref={inputRef}
          placeholder="请输入"
          style={{ width: 88 }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
          size={size}
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
              icon={<PlusOutlined />}
              size={size}
            >
              添加
            </Button>
          )}
    </>
  );
};

export default TagsInput;
