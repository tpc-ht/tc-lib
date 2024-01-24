import { SearchOutlined } from '@ant-design/icons';
import type { AutoCompleteProps, InputRef } from 'antd';
import { AutoComplete, Input, Space } from 'antd';
import classNames from 'classnames';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import styled from 'styled-components';
import { usePrefix } from '../hooks';
import './index.less';
const HighWrapper = styled(Highlighter)`
  .highlight-text {
    background-color: #ffd63f;
  }
`;

export type MenuSearchProps = {
  className?: string;
  placeholder?: string;
  options?: AutoCompleteProps['options'];
  onSelect?: (value: string, option: any) => void;
};

export const MenuSearch: React.FC<MenuSearchProps> = (props) => {
  const { className, options = [], onSelect, placeholder = '搜索' } = props;
  const prefix = usePrefix('menu-search');
  const inputRef = useRef<InputRef | null>(null);
  const [value, setValue] = useState<string>('');
  const [searchMode, setSearchMode] = useState(false);

  const getShowOptions = useCallback((menuData: any, keyWord: string) => {
    if (!keyWord) return [];
    let children: any[] = [];
    menuData.forEach((item: any) => {
      if (item.label.includes(keyWord)) {
        children.push({
          label: (
            <HighWrapper
              highlightClassName="highlight-text"
              searchWords={[keyWord]}
              autoEscape={true}
              textToHighlight={item.label}
            />
          ),
          value: item.value,
        });
      }
    });
    return children;
  }, []);

  const optionsData = useMemo(
    () => getShowOptions(options, value),
    [value, options],
  );

  const inputClass = classNames(`${prefix}-input`, {
    [`${prefix}-show`]: searchMode,
  });
  return (
    <div
      className={classNames(className, prefix)}
      onClick={() => {
        setSearchMode(true);
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }}
    >
      <Space size={4}>
        <SearchOutlined style={{ fontSize: 14 }} />
        {!searchMode && <span>搜索</span>}
      </Space>
      <AutoComplete
        key="AutoComplete"
        className={inputClass}
        value={value}
        options={optionsData}
        backfill={false}
        onSearch={(completeValue) => {
          setValue(completeValue);
        }}
        onSelect={(value, option) => {
          onSelect?.(value, option);
        }}
      >
        <Input
          ref={inputRef}
          aria-label={placeholder}
          placeholder={placeholder}
          onBlur={() => {
            setSearchMode(false);
          }}
        />
      </AutoComplete>
    </div>
  );
};
