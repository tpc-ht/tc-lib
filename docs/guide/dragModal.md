---
toc: content
---

# Modal 
## DragModal 拖拽弹窗
```jsx
import { DragModal, ModalFooter,ModalDemo } from '@tc-lib/components';
import { useState } from 'react';
import { Button, Checkbox } from 'antd';
export default () => {
    
  const [visible, setVisible] = useState(false);
    const open=()=>setVisible(true)
    const cole=()=>setVisible(false)
    return <>
        <Button onClick={open}>打开</Button>
        <DragModal open={visible} title={"新增"} onCancel={cole}>
            <div style={{padding:10}}>
                main
            </div>
            <ModalFooter leftRender={
                <Checkbox>保存并新增</Checkbox>
            } >
                <Button onClick={cole}>
                    关闭
                </Button>
                <Button type="primary" onClick={cole}>确定</Button>
            </ModalFooter>
        </DragModal>
    </>
}
```

## API
参考 [https://ant.design/components/modal-cn#api](https://ant.design/components/modal-cn#api)