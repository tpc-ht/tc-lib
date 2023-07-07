import { ModalProps } from 'antd';
export declare type IHandleModalVisible<T> = (flag?: boolean, value?: T, extra?: IExtraModalProps<T>) => void;
export interface IExtraModalProps<T, U = any> extends ModalProps {
    modalType?: U;
    reload?: () => void;
    handleModalVisible?: IHandleModalVisible<T>;
    [key: string]: any;
}
export interface IModalProps<T, U = any> extends IExtraModalProps<T, U> {
    open: boolean;
    value?: Partial<T>;
}
/** model开启规范 */
export declare const useModelProps: <T>(value?: IModalProps<T, any>) => [IModalProps<T, any>, (flag?: boolean, value?: T, extra?: IExtraModalProps<T, any>) => void];
