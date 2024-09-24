import { useState } from 'react';
export type IHandleModalVisible<T> = (
  flag?: boolean,
  value?: T,
  extra?: IExtraModalProps,
) => void;
export interface IExtraModalProps {
  modalType?: string;
  [key: string]: any;
}
export interface IModalProps<T = any, U = any> extends IExtraModalProps {
  open: boolean;
  value?: T;
}
/** model开启规范 */
const useModalProps = <T = any>(
  value?: IModalProps<T>,
): [
  IModalProps<T>,
  (flag?: boolean, value?: T, extra?: IExtraModalProps) => void,
] => {
  const initValue = {
    open: false,
    reload: () => {},
    handleModalVisible: () => {},
  };
  const [modalProps, setModalProps] = useState<IModalProps<T>>(
    value || initValue,
  );

  const handleModalVisible = (
    flag?: boolean,
    value?: T,
    extra?: IExtraModalProps,
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

export default useModalProps;
