import {
  DragModal,
  IModalProps,
  ModalFooter,
  useModalProps,
} from '@tc-lib/components';
import { Button, Space } from 'antd';
// import 'antd/dist/antd.css';
import React from 'react';
type CreateFormModalProps = IModalProps<
  any,
  'edit' | 'add' | 'detail' | 'auditDetail'
>;
const CreateModal: React.FC<CreateFormModalProps> = ({
  handleModalVisible,
  value,
  ...extra
}) => {
  return (
    <DragModal
      {...extra}
      title="Basic Modal"
      onCancel={() => handleModalVisible?.(false, value)}
      afterClose={() => handleModalVisible?.()}
    >
      <div style={{ padding: 10 }}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p onClick={() => handleModalVisible?.(false, value)}>
          Some contents...
        </p>
      </div>

      <ModalFooter>
        <Button onClick={() => handleModalVisible?.(false, value)}>关闭</Button>
        <Button>确定</Button>
      </ModalFooter>
    </DragModal>
  );
};
export default () => {
  const [modalProps, setModalProps] = useModalProps<any>({
    open: false,
  });
  return (
    <div>
      <Space>
        <Button type="primary" onClick={() => setModalProps(true, {})}>
          新增
        </Button>
        <Button
          type="primary"
          onClick={() => setModalProps(true, {}, { modalType: 'edit' })}
        >
          编辑
        </Button>
      </Space>
      {modalProps?.value ? (
        <CreateModal {...modalProps} handleModalVisible={setModalProps} />
      ) : null}
    </div>
  );
};
