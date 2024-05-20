import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons';
import { isFullArr, isFullObj } from '@tc-lib/utils';
import { Space, Tag, TagProps, Typography } from 'antd';
import csn from 'classnames';
import React, { CSSProperties, FC, Key, memo, useMemo } from 'react';
import './index.less';

import { isArr } from '@tc-lib/utils';
import { usePrefix } from '../../hooks';
const { Paragraph } = Typography;
export interface IDisabledProps {
  value?: any;
  /** 边框 */
  bordered?: boolean;
  className?: string;
  dangerouslySetInnerHTML?: { __html: string };
  style?: React.CSSProperties;
  /** 间隔符 */
  gap?: string;
  copyable?: boolean;
  ellipsis?: boolean;

  type?: 'text' | 'tag' | 'html';
  tagProps?: TagProps;
}

type TagType = {
  value: any;
  name?: string;
} & TagProps;

const getTag: FC<TagType> = ({ value, style, ...extra }) => {
  if (isArr(value))
    return (
      <Space wrap>
        {value?.map((e, index) => (
          <Tag
            color="processing"
            style={{ margin: '0', ...style }}
            key={'tag' + index}
            {...extra}
          >
            {e}
          </Tag>
        ))}
      </Space>
    );

  return (
    <Tag color="processing" style={{ lineHeight: '30px' }} {...extra}>
      {value}
    </Tag>
  );
};
const valFormat = (value: any, gap: string) => {
  if (isArr(value)) return value.join(gap);
  return value;
};

export const Disabled = memo(
  ({
    value,
    copyable,
    ellipsis,
    bordered = true,
    dangerouslySetInnerHTML,
    className,
    type = 'text',
    gap = ' ',
    tagProps,
    style,
    ...e
  }: IDisabledProps) => {
    const prefix = usePrefix('preview-tx');
    const { currentValue, isEllipsis, isCopyable } = useMemo(() => {
      if (!value)
        return {
          currentValue: '-',
          isEllipsis: false,
          isCopyable: false,
          isBordered: bordered,
        };
      switch (type) {
        case 'tag':
          return {
            currentValue: getTag({ ...tagProps, value }),
            isEllipsis: false,
            isCopyable: false,
            isBordered: false,
          };
        case 'html':
          return {
            currentValue: value,
            isEllipsis: false,
            isCopyable: false,
            isBordered: bordered,
          };
        default:
          return {
            currentValue: valFormat(value, gap),
            isEllipsis: ellipsis,
            isCopyable: copyable,
            isBordered: bordered,
          };
      }
    }, [value, bordered, type, tagProps, gap, copyable, ellipsis]);

    if (type === 'html')
      return (
        <div
          className={csn(
            'form-preview-tx',
            prefix + '-html',
            className,
            !bordered ? prefix + '-no-border' : '',
          )}
          style={style}
          {...e}
          dangerouslySetInnerHTML={
            isFullObj(dangerouslySetInnerHTML)
              ? dangerouslySetInnerHTML
              : { __html: currentValue }
          }
        />
      );
    return (
      <div
        className={csn(
          prefix,
          className,
          !bordered ? prefix + '-no-border' : '',
        )}
        style={style}
        {...e}
      >
        {isEllipsis || isCopyable ? (
          <Paragraph
            copyable={isCopyable ? { text: currentValue } : false}
            style={{
              marginBottom: 0,
              marginRight: 0,
              width: '99.9%',
              lineHeight: 'inherit',
            }}
            ellipsis={
              isEllipsis
                ? {
                    rows: 1,
                    expandable: true,
                  }
                : false
            }
          >
            {currentValue}
          </Paragraph>
        ) : (
          currentValue
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
    const prefix = usePrefix('preview-tx');
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
