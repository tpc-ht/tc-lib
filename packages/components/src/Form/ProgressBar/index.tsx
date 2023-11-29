import { Space } from '@tc-lib/components';
import { InputNumber } from 'antd';
import React, { FC, ReactElement, useRef } from 'react';
import styled from 'styled-components';
import { usePrefix } from '../../hooks';
import './index.less';
const InputContent = styled.div`
  .ant-input-number {
    width: ${(e: any) => (e.suffix ? 70 : 50)}px;
    position: relative;
    input {
      padding: 0 ${(e: any) => (e.suffix ? 26 : 4)}px 0 4px;
    }
    &::after {
      position: absolute;
      content: '${(e: any) => e.suffix}';
      right: 4px;
      top: 0;
      bottom: 0;
      line-height: 30px;
      font-size: 12px;
      color: #bbb;
    }
  }
`;
interface IProps {
  value?: number;
  onChange?: (percent: number) => void;
  min?: number;
  suffix?: string;
}

export const ProgressBar: FC<IProps> = ({
  min = 0,
  value = 0,
  suffix,
  onChange,
}): ReactElement => {
  const totalRef = useRef<HTMLDivElement>(null);
  const prefix = usePrefix('progress-bar');
  const mouseDown = (e: any) => {
    e?.preventDefault();
    const { offsetWidth } = totalRef.current!;
    const stop = e.currentTarget;
    const { offsetLeft } = stop;
    stop.style['left'] = offsetLeft + 'px';
    const { pageX: start } = e;
    const move = (e: MouseEvent) => {
      console.log('************************s');
      console.log('offsetWidth', offsetWidth);
      console.log('offsetLeft', offsetLeft);
      console.log('start', start);
      console.log('************************e');
      let val = offsetLeft + e.pageX - start;
      if (val <= 0) val = 0;
      if (val >= offsetWidth) val = offsetWidth;
      let tVal = (val / offsetWidth) * 100;
      onChange?.(tVal < min ? min : tVal);
    };
    const clear = () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', clear);
      document.removeEventListener('mouseleave', clear);
    };
    const mouseup = () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', clear);
      document.removeEventListener('mouseleave', clear);
    };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', mouseup);
    document.addEventListener('mouseleave', clear);
  };
  // const click = (e: any) => {
  //   e?.preventDefault();
  //   const { offsetWidth } = totalRef.current!;
  //   const stop = e.currentTarget;
  //   const { offsetLeft } = stop;
  //   const { pageX: start } = e;
  //   let val = offsetLeft + e.pageX - start;
  //   console.log('totalRef.current!', totalRef.current!);
  //   console.log('offsetWidth', offsetWidth);
  //   console.log('offsetLeft', offsetLeft);
  //   console.log('start', start);

  //   if (val <= 0) val = 0;
  //   if (val >= offsetWidth) val = offsetWidth;
  //   let tVal = (val / offsetWidth) * 100;
  //   onChange?.(tVal < min ? min : tVal);
  // };
  return (
    <Space align="center" style={{ width: '100%' }}>
      {/* <div className={prefix} onClick={click}> */}
      <div className={prefix}>
        <div ref={totalRef}>
          <div style={{ width: value + '%' }} />
        </div>
        <div
          className={`${prefix}-handle`}
          onMouseDown={mouseDown}
          style={{ left: value + '%' }}
        />
      </div>
      <InputContent suffix={suffix}>
        <InputNumber
          value={value}
          controls={false}
          precision={0}
          max={100}
          min={min}
          onChange={onChange}
        />
      </InputContent>
    </Space>
  );
};
