import {
  DragModal,
  IModalProps,
  ModalFooter,
  useModalProps,
} from '@tc-lib/components';
import { isFullArr, isFullObj } from '@tc-lib/utils';
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
  const [createModalProps, setCreateModalProps] = useModalProps<any>();
  const [editModalProps, setEditModalProps] = useModalProps<any>();
  return (
    <div>
      <Space>
        <Button
          type="primary"
          onClick={() => setCreateModalProps(true, ['open'])}
        >
          新增
        </Button>
        <Button
          type="primary"
          onClick={() => setEditModalProps(true, { id: 1 })}
        >
          编辑
        </Button>
      </Space>
      {isFullArr(createModalProps?.value) ? (
        <CreateModal
          {...createModalProps}
          handleModalVisible={setCreateModalProps}
        />
      ) : null}
      {isFullObj(editModalProps?.value) ? (
        <CreateModal
          {...editModalProps}
          handleModalVisible={setEditModalProps}
        />
      ) : null}
    </div>
  );
};
