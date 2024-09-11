import React, { useEffect, useMemo, useRef, useState } from 'react';

import type { DraggableData, DraggableEvent } from 'react-draggable';
import Draggable from 'react-draggable';
import { useWindowResize } from '../hooks';

let index = 100000;
export type FloatingBallProps = {
  // 容器与边框的距离，默认为：8
  space?: number;
  // 悬浮球的位置，默认为：free
  type: 'free' | 'right' | 'left';
  // 悬浮球球的内容
  children: React.ReactNode;
  // 悬浮球球的位置，范围为0-1，为屏幕宽度的百分比，默认为：0
  yProportion?: number;
  // 悬浮球球的位置，范围为0-1，为屏幕高度的百分比，默认为：0
  xProportion?: number;
};
export const FloatingBall = ({
  space = 8,
  type = 'free',
  children,
  yProportion = 0,
  xProportion = 0,
}: FloatingBallProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  const draggleRef = useRef<HTMLDivElement>(null);
  const windowResize = useWindowResize();

  const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
    handlerCoordinate(uiData);
  };
  const handlerCoordinate = (uiData?: DraggableData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    const x = uiData?.x || 0;
    const y = uiData?.y || 0;
    const bounds = {
      left: -targetRect.left + x + space,
      right: clientWidth - (targetRect.right - x) - space,
      top: -targetRect.top + y + space,
      bottom: clientHeight - (targetRect.bottom - y) - space,
    };
    setBounds(bounds);
  };
  const positionFormat = () => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    let x = space;
    if (type === 'right') {
      x = clientWidth - targetRect.width - space;
    }
    if (type === 'free') {
      x =
        xProportion <= 0
          ? x
          : (clientWidth - targetRect.width - space) * xProportion;
    }
    setPosition((e) => ({
      x,
      y: e.y
        ? e.y
        : yProportion <= 0
        ? space
        : (clientHeight - targetRect.height - space) * yProportion,
    }));
  };
  useEffect(() => {
    positionFormat();
    windowResize(positionFormat);
  }, []);

  const axis = useMemo(() => {
    if (['left', 'right'].includes(type)) return 'y';
    return 'both';
  }, [type]);

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        zIndex: --index,
      }}
    >
      <Draggable
        bounds={bounds}
        axis={axis}
        onStart={(event, uiData) => onStart(event, uiData)}
        onDrag={(_event, uiData) => {
          setPosition({
            x: axis === 'y' ? bounds[type] : uiData.x,
            y: uiData.y,
          });
        }}
        position={position}
      >
        <div
          ref={draggleRef}
          style={{
            cursor: 'all-scroll',
            position: 'absolute',
          }}
        >
          {children}
        </div>
      </Draggable>
    </div>
  );
};
