import { isArr } from "@tc-lib/test";
import { Modal, ModalProps, Space } from "antd";
import React, { FC, ReactNode, memo, useMemo, useRef, useState } from "react";
import type { DraggableData, DraggableEvent } from "react-draggable";
import Draggable from "react-draggable";
import "./index.less";
export interface IDragModalProps extends ModalProps {
  title: string;
}
export const DragModal: FC<IDragModalProps> = memo(
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
              width: "100%",
              cursor: "move",
              boxSizing: "border-box",
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
  }
);

export interface IModalFooterProps {
  leftRender?: ReactNode;
  children?: ReactNode;
}
export const ModalFooter = ({ leftRender, children }: IModalFooterProps) => {
  const child = useMemo(() => {
    if (isArr(children)) {
      return <Space>{children}</Space>;
    }
    return children;
  }, [children]);

  return (
    <div
      className={`y-modal-footer ${leftRender ? "y-modal-footer-flex" : ""}`}
    >
      {leftRender}
      {child}
    </div>
  );
};
