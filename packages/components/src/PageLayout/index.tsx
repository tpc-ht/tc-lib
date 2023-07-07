import React, { CSSProperties, FC, memo, ReactNode, useState } from 'react';
import SplitPane from 'react-split-pane';
import './index.less';
import SideBar from './SideBar';
const RSplitPane: any = SplitPane;
export interface IPageMainProps {
  header?: ReactNode;
  children: ReactNode;
  style?: CSSProperties;
  headStyle?: CSSProperties;
}
export const PageMain = ({ children, ...e }: IPageMainProps) => {
  return (
    <div className="y-layout-main" {...e}>
      {children}
    </div>
  );
};
export interface IPageLayoutProps {
  aside?: ReactNode;
  minSize?: number;
  maxSize?: number;
  header?: ReactNode;
  children: ReactNode;
  style?: CSSProperties;
  bodyStyle?: CSSProperties;
  asideStyle?: CSSProperties;
  headStyle?: CSSProperties;
}
export const PageLayout: FC<IPageLayoutProps> = memo(
  ({
    aside,
    header,
    children,
    minSize,
    maxSize,
    bodyStyle,
    asideStyle,
    headStyle,
    ...extra
  }) => {
    const [visible, setVisible] = useState(false);
    return (
      <div className="y-layout" {...extra}>
        {aside ? (
          <RSplitPane
            split="vertical"
            allowResize={!visible}
            size={visible ? 0 : minSize || 200}
            minSize={visible ? 0 : minSize || 200}
            maxSize={maxSize || 400}
          >
            <div className="y-layout-aside" style={asideStyle}>
              <SideBar
                visible={visible}
                onClick={() => setVisible((e) => !e)}
              />
              {aside}
            </div>

            <PageMain>
              {header ? (
                <div className="y-layout-header" style={headStyle}>
                  {header}
                </div>
              ) : null}
              <div className="y-layout-app" style={bodyStyle}>
                {children}
              </div>
            </PageMain>
          </RSplitPane>
        ) : (
          <PageMain>
            {header ? (
              <div className="y-layout-header" style={headStyle}>
                {header}
              </div>
            ) : null}
            <div className="y-layout-app" style={bodyStyle}>
              {children}
            </div>
          </PageMain>
        )}
      </div>
    );
  },
);
