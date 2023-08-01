import { Allotment } from "allotment";
import "allotment/dist/style.css";
import React, { CSSProperties, FC, memo, ReactNode, useState } from "react";
import "./index.less";
import SideBar from "./SideBar";
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
          <>
            <SideBar visible={visible} onClick={() => setVisible((e) => !e)} />
            <Allotment separator={!visible}>
              <Allotment.Pane
                visible={!visible}
                preferredSize={visible ? 0 : minSize || 200}
                minSize={visible ? 0 : minSize || 200}
                maxSize={maxSize || 400}
              >
                <div className="y-layout-aside" style={asideStyle}>
                  {aside}
                </div>
              </Allotment.Pane>

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
            </Allotment>
          </>
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
  }
);
