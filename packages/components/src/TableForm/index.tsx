import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { isNum } from '@tc-lib/utils';
import { Button, Space } from 'antd';
import React, {
  ReactNode,
  memo,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import styled from 'styled-components';

const Wrapper: any = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: ${(p: any) => p.direction}; // width: 1px;
`;

const FormWrapper: any = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  .ant-form-item-label {
    width: ${(p: any) => (p.width ? p.width + 'px' : 'auto')};
  }
  .ant-form-item {
    margin-bottom: ${(p: any) =>
      isNum(p.marginBottom) ? p.marginBottom + 'px' : p.marginBottom};
    // width: ${(p: any) => (p.flag ? '33.3333%' : '25%')};
    width: ${(p: any) => p.flag};
  }
  .ant-picker-range {
    width: 100%;
  }
  .ant-form-item-control {
    width: 1px;
  }
`;

const SearchBar = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  overflow: hidden;
`;

export interface ITableFormProps {
  list: ReactNode[];
  labelW?: number;
  marginBottom?: number | string;
  search?: {
    submit: () => void;
    reset: () => void;
  };
  direction?: 'row' | 'column';
}

export const TableForm = memo(
  ({
    list,
    labelW,
    marginBottom = 16,
    search,
    direction = 'row',
  }: ITableFormProps) => {
    let resizeObserver: any = useRef(null);
    let _innerCont: any = useRef(null);
    const [width, setWidth] = useState<number>(0);
    const [show, setShow] = useState<boolean>(false);

    const createObserver = () => {
      resizeObserver.current = new ResizeObserver(
        (entries: ResizeObserverEntry[]) => {
          const { width = 0 } = (entries[0] && entries[0].contentRect) || {};
          setWidth(width);
        },
      );
      resizeObserver.current.observe(_innerCont.current);
    };

    const destroyObserver = () => {
      if (resizeObserver.current) {
        resizeObserver.current?.disconnect();
        resizeObserver.current = null;
      }
    };
    useEffect(() => {
      createObserver();
      return () => destroyObserver();
    }, []);

    const childList = useMemo(() => {
      const len = list.length;
      const flag = (() => {
        if (width > 1410) {
          return '25%';
        }
        if (width >= 1000) {
          return '33%';
        }
        if (width >= 500) {
          return '50%';
        } else {
          return '100%';
        }
      })();
      let o = { list, flag, len, IsChangeType: false };
      // 大屏幕
      if (width >= 1410) {
        //多余8个
        if (len > 8) {
          if (show) return o;
          return { ...o, list: list.slice(0, 8), IsChangeType: true };
        }
        return o;
      } else if (width >= 1000) {
        if (len > 6) {
          if (show) return o;
          return { ...o, list: list.slice(0, 6), IsChangeType: true };
        }
        return o;
      } else if (width >= 500) {
        if (len > 4) {
          if (show) return o;
          return { ...o, list: list.slice(0, 4), IsChangeType: true };
        }
      } else {
        if (len > 1) {
          if (show) return o;
          return { ...o, list: list.slice(0, 1), IsChangeType: true };
        }
      }

      return o;
    }, [list, width, show]);

    return (
      <Wrapper ref={_innerCont} direction={direction}>
        <FormWrapper
          width={labelW}
          flag={childList.flag}
          marginBottom={marginBottom}
        >
          {childList.list}
        </FormWrapper>
        <SearchBar
          style={
            direction === 'column'
              ? {
                  width: '100%',
                  textAlign: 'end',
                }
              : {}
          }
        >
          <Space size={6} style={{ marginTop: 2 }}>
            <Button type="primary" onClick={search?.submit}>
              查询
            </Button>
            <div>
              <Button onClick={search?.reset}>重置</Button>
              {childList.IsChangeType ? (
                <Button
                  size="small"
                  type="link"
                  onClick={() => setShow((e) => !e)}
                >
                  {!show ? (
                    <span>
                      展开
                      <DownOutlined />
                    </span>
                  ) : (
                    <span>
                      收起
                      <UpOutlined />
                    </span>
                  )}
                </Button>
              ) : null}
            </div>
          </Space>
        </SearchBar>
      </Wrapper>
    );
  },
);
