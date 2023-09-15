import { IModalProps, useModalProps } from '@tc-lib/utils;';
import { Button, Modal } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
interface ICreateModalProps extends IModalProps<any> {
  handleModalVisible: (visible?: boolean, value?: any) => void;
}
const CreateModal: React.FC<ICreateModalProps> = ({
  handleModalVisible,
  ...extra
}) => {
  return (
    <Modal
      {...extra}
      title="Basic Modal"
      onCancel={() => handleModalVisible(false, undefined)}
      afterClose={() => handleModalVisible()}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p onClick={() => handleModalVisible(false, undefined)}>
        Some contents...
      </p>
    </Modal>
  );
};
export default () => {
  const [modalProps, setModalProps] = useModalProps<any>({
    open: false,
  });
  return (
    <div>
      <Button type="primary" onClick={() => setModalProps(true, {})}>
        Open Modal
      </Button>
      {modalProps?.value ? (
        <CreateModal {...modalProps} handleModalVisible={setModalProps} />
      ) : null}
    </div>
  );
};
