import { Button, InputNumber, InputNumberProps, Tag, message } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

import { PlusOutlined } from '@ant-design/icons';
import { isNum } from '@tc-lib/utils';

export interface IArrayTagsNumberProps {
  value?: number[] | undefined;
  onChange?: any;
  tagLength?: number;
  inputProps?: InputNumberProps;
}
const TagsNumberInput: React.FC<IArrayTagsNumberProps> = (props) => {
  const { onChange, value, inputProps, tagLength = 0 } = props;
  const [items, setItems] = useState<number[]>(value || []);
  const [inputVisible, setInputVisible] = useState<boolean>(false);
  const [editInputIndex, setEditInputIndex] = useState<number>(-1);
  const [editInputValue, setEditInputValue] = useState<number>();

  const inputRef = useRef<any>(null);
  const saveEditInputRef = useRef<any>();

  const handleClose = async (removedTag: number) => {
    const currItems = items?.filter((e) => e !== removedTag);
    onChange?.(currItems);
  };
  useEffect(() => {
    setItems(value || []);
  }, [value]);
  const showInput = () => {
    setInputVisible(true);
  };

  const handleEditInputChange = (e: any) => {
    console.log('e', e);
    setEditInputValue(e);
  };
  const handleEditInputConfirm = () => {
    setTimeout(() => {
      let val =
        saveEditInputRef.current.value &&
        Number(saveEditInputRef.current.value);
      setItems((oldState: any) => {
        const newTags = [...oldState];
        newTags[editInputIndex] = val;
        return newTags;
      });
      setEditInputIndex(-1);
      setEditInputValue(undefined);
    }, 10);
  };

  const handleInputConfirm = () => {
    setTimeout(() => {
      let val = inputRef.current.value && Number(inputRef.current.value);
      setItems((oldState: any) => {
        if (isNum(val) && !items.includes(val)) {
          return [...oldState, val];
        } else {
          if (isNum(val)) message.warning('不能重复添加!');
          return oldState;
        }
      });
      setInputVisible(false);
    }, 10);
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

  const editInputHandle = (index: number, tag: number) => {
    setEditInputIndex(index);
    setEditInputValue(tag);
  };

  return (
    <div>
      <>
        {items?.map((tag, index) => {
          if (editInputIndex === index) {
            return (
              <InputNumber
                //@ts-ignore
                ref={saveEditInputRef}
                key={tag}
                placeholder="请输入"
                value={editInputValue}
                style={{ width: 88, marginRight: 8 }}
                onChange={handleEditInputChange}
                onBlur={handleEditInputConfirm}
                onPressEnter={handleEditInputConfirm}
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
          <InputNumber
            //@ts-ignore
            ref={inputRef}
            placeholder="请输入"
            style={{ width: 88 }}
            onBlur={handleInputConfirm}
            onPressEnter={handleInputConfirm}
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
      </>
    </div>
  );
};

export default TagsNumberInput;
