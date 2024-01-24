import { Modal, ModalProps } from 'antd';
import React, { FC, memo, useRef, useState } from 'react';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import Draggable from 'react-draggable';
import './index.less';
export interface IDragModalProps extends ModalProps {
  title: string;
}
const DragModal: FC<IDragModalProps> = memo(
  ({ title, open, children, ...e }) => {
    const [disabled, setDisabled] = useState(true);
    const [bounds, setBounds] = useState({
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
    });
    const draggleRef = useRef<HTMLDivElement>(null);

    const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
      const { clientWidth, clientHeight } = window.document.documentElement;
      const targetRect = draggleRef.current?.getBoundingClientRect();
      if (!targetRect) {
        return;
      }
      setBounds({
        left: -targetRect.left + uiData.x,
        right: clientWidth - (targetRect.right - uiData.x),
        top: -targetRect.top + uiData.y,
        bottom: clientHeight - (targetRect.bottom - uiData.y),
      });
    };
    return (
      <Modal
        // className="y-modal"
        bodyStyle={{ padding: 0 }}
        title={
          <div
            style={{
              width: '100%',
              cursor: 'move',
              boxSizing: 'border-box',
            }}
            onMouseOver={() => {
              if (disabled) setDisabled(false);
            }}
            onMouseOut={() => setDisabled(true)}
          >
            {title}
          </div>
        }
        footer={null}
        maskClosable={false}
        mask={false}
        open={open}
        modalRender={(modal) => (
          <Draggable
            disabled={disabled}
            bounds={bounds}
            onStart={(event, uiData) => onStart(event, uiData)}
          >
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
        // getContainer={false}
        {...e}
      >
        {children}
      </Modal>
    );
  },
);

export default DragModal;
