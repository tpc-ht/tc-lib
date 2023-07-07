---
toc: content
---
# Hooks

## useModelProps model开启规范
开启对话框统一方式
<code src="./demos/useModel.tsx"></code>
```
type IHandleModalVisible<T> = (
  flag?: boolean,
  value?: T,
  extra?: IExtraModalProps<T>,
) => void;

interface IExtraModalProps<T, U = any> extends ModalProps {
  modalType?: U;
  reload?: () => void;
  handleModalVisible?: IHandleModalVisible<T>;
  [key: string]: any;
}


export interface IModalProps<T, U = any> extends IExtraModalProps<T, U> {
  open: boolean;
  value?: Partial<T>;
}
```
