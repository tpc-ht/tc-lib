
# Formily
## 使用 `ref` 调用组件函数
使用 `inject` 注入可执行函数，使用 `invoke` 调用注入函数
```ts
import { BusinessTreeSelect as ProBusinessTreeSelect } from '@/components';
import { useField } from '@formily/react';
import { useEffect, useRef } from 'react';

const BusinessTreeSelect = (props: any) => {
  const field = useField();
  const selRef = useRef<any>();
  useEffect(() => {
    field.inject({
      refresh: selRef.current?.refresh,
      run: selRef.current?.run,
    });
  }, []);
  return <ProBusinessTreeSelect {...props} ref={selRef} />;
};
```
在 `Markup/JSON Schema`  模式下
```ts
'x-reactions': {
    fulfill: {
        run: "{{ $self.invoke('refresh',{type:$deps[0]}) }}",
    },
},
```
在纯 JSX 模式下
```ts
form.getFieldState('pid')?.actions?.refresh()
```
