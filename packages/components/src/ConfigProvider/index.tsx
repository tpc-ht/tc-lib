import { ConfigProvider as AntConfigProvider } from 'antd';
import { ConfigProviderProps } from 'antd/lib/config-provider';
import React, { CSSProperties } from 'react';
import { ConfigProviderContext } from '../context';
type ConfigProviderPropsType = {
  disableStyle?: CSSProperties | { body?: CSSProperties; node?: CSSProperties };
} & ConfigProviderProps;

export const ConfigProvider: React.FC<ConfigProviderPropsType> = ({
  disableStyle,
  children,
  ...e
}) => {
  return (
    <AntConfigProvider {...e}>
      <ConfigProviderContext.Provider
        value={{
          disableStyle,
        }}
      >
        {children}
      </ConfigProviderContext.Provider>
    </AntConfigProvider>
  );
};
