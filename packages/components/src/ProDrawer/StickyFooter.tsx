import { isArr } from '@tc-lib/utils';
import { Space } from 'antd';
import cns from 'classnames';
import React, { ReactNode, useMemo } from 'react';
import { usePrefix } from '../hooks';
import './index.less';
export interface IStickyFooterProps {
  leftRender?: ReactNode;
  children?: ReactNode;
}
const StickyFooter = ({ leftRender, children }: IStickyFooterProps) => {
  const stickyFooter = usePrefix('sticky-footer');
  const child = useMemo(() => {
    if (isArr(children)) {
      return <Space>{children}</Space>;
    }
    return children;
  }, [children]);

  return (
    <div
      className={cns(stickyFooter, leftRender ? stickyFooter + '-flex' : '')}
    >
      {leftRender}
      {child}
    </div>
  );
};
export default StickyFooter;
