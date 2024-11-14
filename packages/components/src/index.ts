import ConfigProvider, { ConfigProviderPropsType } from './ConfigProvider';
import FlexSpace, { FlexSpaceProps } from './FlexSpace';
import Loading, { LoadingProps } from './Loading';
import MenuSearch, { MenuSearchProps } from './MenuSearch';
import PageLayout, { PageLayoutProps } from './PageLayout';
import TableForm, { TableFormProps } from './TableForm';
import TextHover from './TextHover';
import VersionUpdateTips, { VersionUpdateTipsProps } from './VersionUpdateTips';
import Waterfall, { WaterfallProps } from './Waterfall';
//
import './global.less';
export * from './Button';
export * from './DragModal';
export * from './FloatingBall';
export * from './Form';
export * from './ProDrawer';
//
export * from './hooks';

// --

export {
  ConfigProvider,
  FlexSpace,
  Loading,
  MenuSearch,
  PageLayout,
  TableForm,
  TextHover,
  VersionUpdateTips,
  Waterfall,
};
export type {
  ConfigProviderPropsType,
  FlexSpaceProps,
  LoadingProps,
  MenuSearchProps,
  PageLayoutProps,
  TableFormProps,
  VersionUpdateTipsProps,
  WaterfallProps,
};
