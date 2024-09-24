import { Tooltip } from 'antd';
import cns from 'classnames';
import React, { memo, useMemo } from 'react';
import { usePrefix } from '../hooks';
import './index.less';
const TextHover = memo(
  ({ children, className, title, ...e }: JSX.IntrinsicElements['div']) => {
    const cN = usePrefix('text-hover');
    const body = useMemo(
      () => (
        <div className={cns(cN, className)} {...e}>
          {children}
        </div>
      ),
      [children, className],
    );
    if (title)
      return (
        <Tooltip placement="topLeft" title={title}>
          {body}
        </Tooltip>
      );
    return body;
  },
);
export default TextHover;
