import { CloseCircleOutlined } from '@ant-design/icons';
import { Alert, Button, Empty, Spin, SpinProps } from 'antd';
import cns from 'classnames';
import React, { memo, useMemo } from 'react';
import FlexSpace from '../FlexSpace';
import { usePrefix } from '../hooks';
import './index.less';

const codeMessage: Record<number, string> = {
  200: '服务器成功返回请求的数据。',
  404: '请求路径不存在！',
  410: '请求的资源被永久删除，且不会再得到的。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const ErrorAlert = ({ error, refresh }) => {
  const alertClassName = usePrefix('error-alert');
  const { title = '接口错误', description } = useMemo(() => {
    let title = '请求服务器异常';
    let description = '';
    try {
      if (error.name === 'AxiosError') {
        const { status, statusText } = error.response;
        description = codeMessage[status] || statusText;
      } else {
        title = '服务器返回异常';
        description = error.data.msg || '执行失败！';
      }
    } catch (error) {
      description = '执行失败！';
    }
    return { title, description };
  }, [error]);
  return (
    <div className={alertClassName}>
      {/* <Alert message={title} description={description} type="error" /> */}
      <Alert
        message={
          <FlexSpace size={8}>
            <Button icon={<CloseCircleOutlined />} danger type="link" />
            <div>
              <div>{title}：</div>
              <div>{description}</div>
            </div>
          </FlexSpace>
        }
        type="error"
      />
      {refresh && (
        <div onClick={refresh} className={alertClassName + '-button-box'}>
          <Button style={{ width: 100 }}>重新加载</Button>
        </div>
      )}
    </div>
  );
};

export interface LoadingProps extends SpinProps {
  loading: boolean;
  error?: any;
  empty?: boolean;
  refresh?: () => void;
  size?: 'small' | 'default' | 'large';
  children?: any;
}

const Loading = memo(
  ({
    loading,
    error,
    empty,
    refresh,
    className,
    children,
    size = 'default',
    ...e
  }: LoadingProps) => {
    const loadClassName = usePrefix('loading-main');

    return (
      <Spin
        size={size}
        spinning={loading}
        wrapperClassName={cns(loadClassName, className)}
        delay={200}
        {...e}
      >
        {error ? (
          <ErrorAlert error={error} refresh={refresh} />
        ) : empty ? (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        ) : (
          children
        )}
      </Spin>
    );
  },
);

export default Loading;
