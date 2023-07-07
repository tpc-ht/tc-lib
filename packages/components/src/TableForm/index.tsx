import { DownOutlined, UpOutlined } from '@ant-design/icons';
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
    margin-bottom: 10px;
    width: ${(p: any) => (p.flag ? '33.3333%' : '25%')};
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
  search?: {
    submit: () => void;
    reset: () => void;
  };
  minNum?: number;
  maxNum?: number;
  direction?: 'row' | 'column';
}

export const TableForm = memo(
  ({
    list,
    labelW,
    search,
    direction = 'row',
    minNum = 6,
    maxNum = 8,
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
      const flag = width <= 1410;
      let o = { list, flag, len };
      // if (len <= 4) return o;
      // 大屏幕
      if (width > 1410) {
        //多余8个
        if (len > maxNum) {
          if (show) return o;
          return { ...o, list: list.slice(0, maxNum) };
        }
        return o;
      }

      if (len > minNum) {
        if (show) return o;
        return { ...o, list: list.slice(0, minNum) };
      }
      return o;
    }, [list, width, minNum, maxNum, show]);

    const IsChangeType = useMemo(() => {
      return (
        (childList.flag && childList.len > minNum) ||
        (!childList.flag && childList.len > maxNum)
      );
    }, [childList]);

    return (
      <Wrapper ref={_innerCont} direction={direction}>
        <FormWrapper width={labelW} flag={childList.flag}>
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
              {IsChangeType ? (
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
