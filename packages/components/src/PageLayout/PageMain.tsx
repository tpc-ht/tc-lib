import React, { CSSProperties, ReactNode, memo } from 'react';
import { usePrefix } from '../hooks';
export interface PageMainProps {
  header?: ReactNode;
  children: ReactNode;
  style?: CSSProperties;
  headStyle?: CSSProperties;
}
const PageMain = memo(({ children, ...e }: PageMainProps) => {
  const mainClass = usePrefix('page-layout');
  return (
    <div className={mainClass + '-main'} {...e}>
      {children}
    </div>
  );
});
export default PageMain;
