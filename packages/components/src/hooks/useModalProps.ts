import { ModalProps } from 'antd';
import { useState } from 'react';
export type IHandleModalVisible<T> = (
  flag?: boolean,
  value?: T,
  extra?: IExtraModalProps<T>,
) => void;
export interface IExtraModalProps<T, U = any> extends ModalProps {
  modalType?: U;
  reload: () => void;
  handleModalVisible: IHandleModalVisible<T>;
  [key: string]: any;
}
export interface IModalProps<T, U = any> extends IExtraModalProps<T, U> {
  open: boolean;
  value?: T;
}
/** model开启规范 */
export const useModalProps = <T = any,>(
  value?: IModalProps<T>,
): [
    IModalProps<T>,
    (flag?: boolean, value?: T, extra?: IExtraModalProps<T>) => void,
  ] => {
  const initValue = {
    open: false,
    reload: () => { },
    handleModalVisible: () => { },
  };
  const [modalProps, setModalProps] = useState<IModalProps<T>>(
    value || initValue,
  );

  const handleModalVisible = (
    flag?: boolean,
    value?: T,
    extra?: IExtraModalProps<T>,
  ) => {
    setModalProps((e) => ({
      ...e,
      ...extra,
      open: flag || false,
      value: value || undefined,
    }));
  };
  return [modalProps, handleModalVisible];
};
