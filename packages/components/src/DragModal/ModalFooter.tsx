import { isArr } from '@tc-lib/utils';
import { Space } from 'antd';
import cns from 'classNames';
import React, { ReactNode, useMemo } from 'react';
import { usePrefix } from '../hooks';
import './index.less';
export interface IModalFooterProps {
  leftRender?: ReactNode;
  children?: ReactNode;
}
const ModalFooter = ({ leftRender, children }: IModalFooterProps) => {
  const modalFooter = usePrefix('modal-footer');
  const child = useMemo(() => {
    if (isArr(children)) {
      return <Space>{children}</Space>;
    }
    return children;
  }, [children]);

  return (
    <div className={cns(modalFooter, leftRender ? modalFooter + '-flex' : '')}>
      {leftRender}
      {child}
    </div>
  );
};
export default ModalFooter;
