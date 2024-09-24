import { CSSProperties, useContext, useMemo } from 'react';
import { ConfigProviderContext } from '../context';

const useDisabledStyle = () => {
  const config = useContext(ConfigProviderContext);
  return useMemo(() => {
    const disableStyle = config?.disableStyle;
    if (!disableStyle) return {};
    if ('body' in disableStyle || 'node' in disableStyle) {
      return { body: disableStyle.body, node: disableStyle.node };
    }
    return { body: disableStyle as CSSProperties };
  }, [config?.disableStyle]);
};
export default useDisabledStyle;
