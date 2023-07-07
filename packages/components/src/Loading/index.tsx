import { Button, Empty, Spin, SpinProps } from "antd";
import React, { memo } from "react";

export interface ILoadingProps extends SpinProps {
  loading: boolean;
  error?: any;
  empty?: boolean;
  refresh?: () => void;
  size?: "small" | "default" | "large";
  children?: any;
}

export const Loading = memo(
  ({
    loading,
    error,
    empty,
    refresh,
    className,
    children,
    size = "default",
    ...e
  }: ILoadingProps) => {
    if (error)
      return (
        <Empty
          style={{ padding: "32px 0" }}
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="资源获取失败！"
        >
          {refresh ? (
            <Button type="primary" onClick={refresh}>
              重新加载
            </Button>
          ) : null}
        </Empty>
      );
    return (
      <Spin
        size={size}
        spinning={loading}
        wrapperClassName={className}
        delay={200}
        {...e}
      >
        {empty ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /> : children}
      </Spin>
    );
  }
);
