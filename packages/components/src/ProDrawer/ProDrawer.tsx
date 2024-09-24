// import { Loading } from '@tc-lib/components';
// import { Drawer, DrawerProps } from 'antd';
// import cns from 'classnames';
// import React from 'react';

// export interface ProDrawerProps extends DrawerProps {
//   loadingProps?: {
//     loading: boolean;
//     refresh?: () => void;
//     error?: any;
//   };
// }
// const ProDrawer: React.FC<ProDrawerProps> = ({
//   loadingProps,
//   className,
//   children,
//   ...e
// }) => {
//   return (
//     <Drawer
//       footer={null}
//       bodyStyle={{ position: 'relative', padding: 0, minHeight: 280 }}
//       {...e}
//       className={cns(className)}
//     >
//       <div style={{ height: '100%', width: '100%', overflow: 'hidden auto' }}>
//         {loadingProps ? (
//           <Loading {...loadingProps}>{children}</Loading>
//         ) : (
//           children
//         )}
//       </div>
//     </Drawer>
//   );
// };
// export default ProDrawer;

import { LeftOutlined } from '@ant-design/icons';
import { Loading, TextHover } from '@tc-lib/components';
import { Drawer, DrawerProps } from 'antd';
import cns from 'classnames';
import React, { ReactNode, useMemo, useState } from 'react';
import { usePrefix } from '../hooks';
import './index.less';

export interface ProDrawerProps extends DrawerProps {
  loadingProps?: {
    loading: boolean;
    refresh?: () => void;
    error?: any;
  };
  headerRight?: ReactNode;
}
interface DrawerTitleProps {
  children: ReactNode;
  onClose?: (e: React.MouseEvent | React.KeyboardEvent) => void;
  headerRight?: ReactNode;
}
const DrawerTitle = ({ children, onClose, headerRight }: DrawerTitleProps) => {
  const drawerHeader = usePrefix('drawer-header');
  return (
    <div className={drawerHeader}>
      <TextHover title="返回" onClick={onClose}>
        <LeftOutlined />
      </TextHover>
      <div>{children}</div>
      <div>{headerRight}</div>
    </div>
  );
};
const ProDrawer: React.FC<ProDrawerProps> = ({
  onClose,
  loadingProps,
  className,
  children,
  headerStyle,
  bodyStyle,
  title,
  headerRight,
  ...e
}) => {
  const [afterOpen, setAfterOpen] = useState(false);
  const afterOpenChange = (open) => {
    setAfterOpen(open);
  };
  const body = useMemo(() => {
    if (!afterOpen) return;
    if (loadingProps) return <Loading {...loadingProps}>{children}</Loading>;
    return children;
  }, [loadingProps, afterOpen, children]);
  return (
    <Drawer
      afterOpenChange={afterOpenChange}
      bodyStyle={{
        position: 'relative',
        padding: 0,
        height: '100%',
        width: '100%',
        overflow: 'hidden auto',
        ...bodyStyle,
      }}
      placement="bottom"
      mask={false}
      title={
        <DrawerTitle onClose={onClose} headerRight={headerRight}>
          {title}
        </DrawerTitle>
      }
      closable={false}
      onClose={onClose}
      getContainer={false}
      height={'100%'}
      headerStyle={{ padding: 0, border: '1px solid #f0f0f0', ...headerStyle }}
      {...e}
      className={cns(className)}
    >
      {body}
    </Drawer>
  );
};
export default ProDrawer;
