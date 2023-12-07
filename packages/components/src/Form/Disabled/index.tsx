import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons';
import { isFullArr, isFullObj, isStr } from '@tc-lib/utils';
import { Space, Typography } from 'antd';
import csn from 'classnames';
import React, { CSSProperties, Key, memo, useMemo } from 'react';
import './index.less';

import { usePrefix } from '../../hooks';
const { Paragraph } = Typography;
export interface IDisabledProps {
  value?: any;
  // gap?: string;
  isCopy?: boolean;
  bordered?: boolean;
  className?: string;
  dangerouslySetInnerHTML?: { __html: string };
  style?: React.CSSProperties;
}

export const Disabled = memo(
  ({
    value,
    isCopy,
    bordered = true,
    dangerouslySetInnerHTML,
    className,
    ...e
  }: IDisabledProps) => {
    const prefix = usePrefix('preview-text');
    // const getTag = (arr: any[], name?: string) =>
    //   arr?.map((e) => (
    //     <Tag key={name ? e[name] : e}>{name ? e[name] : e}</Tag>
    //   )) || '-';
    // const valStr = useMemo(() => {
    //   switch (Object.prototype.toString.call(value)) {
    //     case '[object Array]':
    //       return spaceType === 'tag'
    //         ? getTag(value)
    //         : value.join(spaceType || ',');
    //     default:
    //       return value;
    //   }
    // }, [value, spaceType]);
    if (isFullObj(dangerouslySetInnerHTML))
      return (
        <div
          className={csn(
            'form-preview-text',
            prefix + '-html',
            className,
            !bordered ? prefix + '-no-border' : '',
          )}
          {...e}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML || { __html: '' }}
        />
      );
    return (
      <div
        className={csn(
          prefix,
          className,
          !bordered ? prefix + '-no-border' : '',
        )}
        {...e}
      >
        {isStr(value) ? (
          isCopy ? (
            <Paragraph
              copyable={{ text: value }}
              style={{ marginBottom: 0, width: '99.9%', lineHeight: 'inherit' }}
              ellipsis={{
                rows: 1,
                expandable: true,
              }}
            >
              {value || '-'}
            </Paragraph>
          ) : (
            value || '-'
          )
        ) : (
          value
        )}
      </div>
    );
  },
);

interface IBooleanDisableProps {
  value?: string;
  checkedChildren?: string;
  unCheckedChildren?: string;
  className?: string;
  style?: CSSProperties;
  checkedValue?: [Key, Key];
  bordered?: boolean;
}
export const BooleanDisable = memo(
  ({
    value,
    className,
    checkedValue,
    bordered = true,
    checkedChildren = '是',
    unCheckedChildren = '否',
    ...e
  }: IBooleanDisableProps) => {
    const prefix = usePrefix('preview-text');
    const switchValue = useMemo(() => {
      if (isFullArr(checkedValue)) {
        const [v1] = checkedValue;
        return value === v1;
      }
      return value;
    }, [checkedValue, value]);
    return (
      <div
        className={csn(
          prefix,
          className,
          !bordered ? prefix + '-no-border' : '',
        )}
        {...e}
      >
        {switchValue ? (
          <Space align="baseline" size={6}>
            <CheckCircleFilled style={{ color: '#6abf40', fontSize: 14 }} />
            <span>{checkedChildren}</span>
          </Space>
        ) : (
          <Space align="start" size={6}>
            <CloseCircleFilled style={{ color: '#ff4d4f', fontSize: 14 }} />
            <span>{unCheckedChildren}</span>
          </Space>
        )}
      </div>
    );
  },
);
