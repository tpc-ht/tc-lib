import { Allotment } from 'allotment';
import 'allotment/dist/style.css';
import csn from 'classnames';
import React, {
  CSSProperties,
  FC,
  memo,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { usePrefix } from '../hooks';
import './index.less';
import SideBar from './SideBar';
export interface IPageMainProps {
  header?: ReactNode;
  children: ReactNode;
  style?: CSSProperties;
  headStyle?: CSSProperties;
}
export const PageMain = ({ children, ...e }: IPageMainProps) => {
  const mainClass = usePrefix('page-layout');
  return (
    <div className={mainClass + '-main'} {...e}>
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
  className?: string;
}
export const PageLayout: FC<IPageLayoutProps> = memo(
  ({
    aside,
    header,
    children,
    minSize = 200,
    maxSize = 400,
    bodyStyle,
    asideStyle,
    headStyle,
    className,
    ...extra
  }) => {
    const mainClass = usePrefix('page-layout');
    const [visible, setVisible] = useState(false);
    const ref = useRef<any>();
    useEffect(() => {
      setTimeout(() => ref.current?.reset(), 0);
    }, []);
    return (
      <div className={csn(mainClass, className)} {...extra}>
        {aside ? (
          <>
            <SideBar
              visible={visible}
              className={mainClass + '-side-bar'}
              onClick={() => setVisible((e) => !e)}
            />
            <Allotment separator={!visible} ref={ref}>
              <Allotment.Pane
                visible={!visible}
                preferredSize={minSize}
                minSize={minSize}
                maxSize={maxSize}
              >
                <div className={mainClass + '-aside'} style={asideStyle}>
                  {aside}
                </div>
              </Allotment.Pane>
              <PageMain>
                {header ? (
                  <div className={mainClass + '-header'} style={headStyle}>
                    {header}
                  </div>
                ) : null}
                {children ? (
                  <div className={mainClass + '-app'} style={bodyStyle}>
                    {children}
                  </div>
                ) : null}
              </PageMain>
            </Allotment>
          </>
        ) : (
          <PageMain>
            {header ? (
              <div className={mainClass + '-header'} style={headStyle}>
                {header}
              </div>
            ) : null}
            {children ? (
              <div className={mainClass + '-app'} style={bodyStyle}>
                {children}
              </div>
            ) : null}
          </PageMain>
        )}
      </div>
    );
  },
);
