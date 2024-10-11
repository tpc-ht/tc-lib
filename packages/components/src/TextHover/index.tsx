import cns from 'classnames';
import React, { memo } from 'react';
import { usePrefix } from '../hooks';
import './index.less';
const TextHover = memo(
  ({ children, className, ...e }: JSX.IntrinsicElements['div']) => {
    const cN = usePrefix('text-hover');
    return (
      <div className={cns(cN, className)} {...e}>
        {children}
      </div>
    );
  },
);
export default TextHover;
