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
import PageMain from './PageMain';
import SideBar from './SideBar';
export interface PageLayoutProps {
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

const PageLayout: FC<PageLayoutProps> = memo(
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
        {aside && (
          <SideBar
            visible={visible}
            className={mainClass + '-side-bar'}
            onClick={() => setVisible((e) => !e)}
          />
        )}

        {aside ? (
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
export default PageLayout;
// 根据children判断插槽类型
// import { isArr } from '@tc-lib/utils';
// import { Allotment } from 'allotment';
// import 'allotment/dist/style.css';
// import csn from 'classnames';
// import React, {
//   CSSProperties,
//   FC,
//   memo,
//   ReactNode,
//   useEffect,
//   useMemo,
//   useRef,
//   useState,
// } from 'react';
// import { usePrefix } from '../hooks';
// import './index.less';
// import SideBar from './SideBar';
// export interface IPageMainProps {
//   header?: ReactNode;
//   children: ReactNode;
//   style?: CSSProperties;
//   headStyle?: CSSProperties;
// }
// export const PageMain = ({ children, ...e }: IPageMainProps) => {
//   const mainClass = usePrefix('page-layout');
//   return (
//     <div className={mainClass + '-main'} {...e}>
//       {children}
//     </div>
//   );
// };
// export interface IPageLayoutProps {
//   children: ReactNode;
//   style?: CSSProperties;
//   bodyStyle?: CSSProperties;
//   className?: string;
// }
// export const PageLayout: FC<IPageLayoutProps> & {
//   Aside?: any;
//   Header?: any;
// } = memo(
//   ({
//     children,
//     bodyStyle,
//     className,
//     ...extra
//   }) => {
//     const mainClass = usePrefix('page-layout');
//     console.log('children', children);
//     const { aside, header, main } = useMemo(() => {
//       let context: any = { aside: null, header: null, main: [] };
//       if (isArr(children)) {
//         for (let index = 0; index < children.length; index++) {
//           const ele = children[index];
//           if (ele.type === PageLayout.Aside) {
//             context.aside = ele;
//             continue;
//           }
//           if (ele.type === PageLayout.Header) {
//             context.header = ele;
//             continue;
//           }
//           context.main.push(ele);
//         }
//         return context;
//       }
//       context.main = children;
//       return context;
//     }, [children]);

//     return (
//       <div className={csn(mainClass, className)} {...extra}>
//         {aside ? (
//           React.cloneElement(aside, {
//             mainChildren: (
//               <PageMain>
//                 {header ? header : null}
//                 {main ? (
//                   <div className={mainClass + '-app'} style={bodyStyle}>
//                     {main}
//                   </div>
//                 ) : null}
//               </PageMain>
//             ),
//           })
//         ) : (
//           <PageMain>
//             {header ? header : null}
//             {main ? (
//               <div className={mainClass + '-app'} style={bodyStyle}>
//                 {main}
//               </div>
//             ) : null}
//           </PageMain>
//         )}
//       </div>
//     );
//   },
// );

// export interface IPageLayoutAsideProps {
//   minSize?: number;
//   maxSize?: number;
//   children: ReactNode;
//   style?: CSSProperties;
//   mainChildren?: ReactNode;
// }
// PageLayout.Aside = ({
//   style,
//   mainChildren,
//   minSize = 200,
//   maxSize = 400,
//   children,
// }: IPageLayoutAsideProps) => {
//   const mainClass = usePrefix('page-layout');
//   const [visible, setVisible] = useState(false);
//   const ref = useRef<any>();
//   useEffect(() => {
//     setTimeout(() => ref.current?.reset(), 0);
//   }, []);
//   return (
//     <>
//       <SideBar
//         visible={visible}
//         className={mainClass + '-side-bar'}
//         onClick={() => setVisible((e) => !e)}
//       />
//       <Allotment separator={!visible} ref={ref}>
//         <Allotment.Pane
//           visible={!visible}
//           preferredSize={minSize}
//           minSize={minSize}
//           maxSize={maxSize}
//         >
//           <div className={mainClass + '-aside'} style={style}>
//             {children}
//           </div>
//         </Allotment.Pane>
//         {mainChildren}
//       </Allotment>
//     </>
//   );
// };

// export interface IPageLayoutHeaderProps {
//   minSize?: number;
//   maxSize?: number;
//   children: ReactNode;
//   style?: CSSProperties;
//   mainChildren?: ReactNode;
// }
// PageLayout.Header = ({ style, children }: any) => {
//   const mainClass = usePrefix('page-layout');
//   return (
//     <div className={mainClass + '-header'} style={style}>
//       {children}
//     </div>
//   );
// };
// PageLayout.displayName = 'PageLayout';
// PageLayout.Aside.displayName = 'PageLayout.Aside';
// PageLayout.Header.displayName = 'PageLayout.Header';
