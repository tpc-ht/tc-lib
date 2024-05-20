import { Loading } from '@tc-lib/components';
import { Drawer, DrawerProps } from 'antd';
import cns from 'classnames';
import React from 'react';

export interface IProDrawerProps extends DrawerProps {
  loadingProps?: {
    loading: boolean;
    refresh?: () => void;
    error?: any;
  };
}
const ProDrawer: React.FC<IProDrawerProps> = ({
  loadingProps,
  className,
  children,
  ...e
}) => {
  return (
    <Drawer
      footer={null}
      bodyStyle={{ position: 'relative', padding: 0, minHeight: 280 }}
      {...e}
      className={cns(className)}
    >
      <div style={{ height: '100%', width: '100%', overflow: 'hidden auto' }}>
        {loadingProps ? (
          <Loading {...loadingProps}>{children}</Loading>
        ) : (
          children
        )}
      </div>
    </Drawer>
  );
};
export default ProDrawer;
