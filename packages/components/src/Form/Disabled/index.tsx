import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons';
import { isFullArr, isFullObj } from '@tc-lib/utils';
import { Space, Tag, TagProps, Typography } from 'antd';
import csn from 'classnames';
import React, { CSSProperties, FC, Key, memo, useMemo } from 'react';
import './index.less';

import { isArr } from '@tc-lib/utils';
import { useDisabledStyle, usePrefix } from '../../hooks';
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
  size?: 'large' | 'middle' | 'small';

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
    size = 'middle',
    gap = ' ',
    tagProps,
    style,
    ...e
  }: IDisabledProps) => {
    const prefix = usePrefix('preview-tx');
    const disabledStyle = useDisabledStyle();
    const { bodyStyle, nodeStyle } = useMemo(() => {
      const { body, node } = disabledStyle;
      if (!bordered) return { bodyStyle: {}, nodeStyle: {} };
      return { bodyStyle: body, nodeStyle: node };
    }, [bordered, disabledStyle]);
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
            currentValue: getTag({
              ...tagProps,
              style: nodeStyle,
              value,
            }),
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
    }, [value, bordered, type, tagProps, gap, copyable, ellipsis, nodeStyle]);
    const height = useMemo(() => {
      switch (size) {
        case 'large':
          return '40px';
        case 'small':
          return '24px';
      }
      return '32px';
    }, [size]);
    if (type === 'html')
      return (
        <div
          className={csn(
            'form-preview-tx',
            prefix + '-html',
            className,
            !bordered ? prefix + '-no-border' : '',
          )}
          style={{
            ...bodyStyle,
            ...style,
          }}
          {...e}
          dangerouslySetInnerHTML={
            isFullObj(dangerouslySetInnerHTML)
              ? dangerouslySetInnerHTML
              : { __html: currentValue }
          }
        />
      );
    return isEllipsis || isCopyable ? (
      <div
        className={csn(
          prefix,
          className,
          !bordered ? prefix + '-no-border' : '',
        )}
        style={{
          height,
          lineHeight: height,
          ...bodyStyle,
          ...style,
        }}
        {...e}
      >
        <Paragraph
          copyable={isCopyable ? { text: currentValue } : false}
          style={{
            marginBottom: 0,
            marginRight: 0,
            color: 'inherit',
            width: '99.9%',
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
      </div>
    ) : (
      <div
        className={csn(
          prefix,
          className,
          !bordered ? prefix + '-no-border' : '',
        )}
        style={{
          height,
          lineHeight: height,
          ...(!(isEllipsis || isCopyable) ? bodyStyle : {}),
          ...style,
        }}
        {...e}
      >
        {currentValue}
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
    const disabledStyle = useDisabledStyle();
    const { bodyStyle } = useMemo(() => {
      const { body, node } = disabledStyle;
      if (!bordered) return { bodyStyle: {}, nodeStyle: {} };
      return { bodyStyle: body, nodeStyle: node };
    }, [bordered, disabledStyle]);
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
        style={bodyStyle}
        {...e}
      >
        {switchValue ? (
          <Space align="baseline" size={6}>
            <CheckCircleFilled style={{ color: '#6abf40', fontSize: 14 }} />
            {checkedChildren}
          </Space>
        ) : (
          <Space align="start" size={6}>
            <CloseCircleFilled style={{ color: '#ff4d4f', fontSize: 14 }} />
            {unCheckedChildren}
          </Space>
        )}
      </div>
    );
  },
);
