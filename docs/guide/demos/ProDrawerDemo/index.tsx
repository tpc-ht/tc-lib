import { ProDrawer } from '@tc-lib/components';
import { Button, Space } from 'antd';
import React, { useState } from 'react';
import './index.css';
const ProDrawerDemo = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="site-drawer-render-in-current-wrapper">
      Render in this
      <div style={{ marginTop: 16 }}>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </div>
      <ProDrawer
        title="标题"
        onClose={onClose}
        headerRight={
          <Space>
            <Button type="primary">保存</Button>
          </Space>
        }
        open={open}
      >
        <p>Some contents...</p>
      </ProDrawer>
    </div>
  );
};
export default ProDrawerDemo;
