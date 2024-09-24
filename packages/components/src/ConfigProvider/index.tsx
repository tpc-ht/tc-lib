import { ConfigProvider as AntConfigProvider } from 'antd';
import { ConfigProviderProps } from 'antd/lib/config-provider';
import React, { CSSProperties, memo } from 'react';
import { ConfigProviderContext } from '../context';
export type ConfigProviderPropsType = {
  disableStyle?: CSSProperties | { body?: CSSProperties; node?: CSSProperties };
} & ConfigProviderProps;

const ConfigProvider: React.FC<ConfigProviderPropsType> = memo(
  ({ disableStyle, children, ...e }) => {
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
  },
);
export default ConfigProvider;
