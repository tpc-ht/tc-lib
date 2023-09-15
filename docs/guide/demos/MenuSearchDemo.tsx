import { MenuSearch } from '@tc-lib/components';
import React from 'react';
// import { history } from 'umi';
const MenuSearchDemo = () => {
  const options = [
    {
      label: '用户管理',
      value: '/sys/user',
    },
    {
      label: '角色管理',
      value: '/sys/role',
    },
  ];
  return (
    <MenuSearch
      options={options}
      onSelect={(value) => {
        // history.push(value);
      }}
    />

    //
  );
};
export default MenuSearchDemo;
