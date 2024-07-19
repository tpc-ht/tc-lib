import { createContext, CSSProperties } from 'react';

export const ConfigProviderContext = createContext<{
  disableStyle?: CSSProperties | { body?: CSSProperties; node?: CSSProperties };
}>({});
