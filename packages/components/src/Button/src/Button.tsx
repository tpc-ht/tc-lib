import { isFn, isPro } from '@tc-lib/utils';
import type { ButtonProps } from 'antd';
import { Button as AndButton } from 'antd';
import React, { memo, useState } from 'react';

const Button = memo(({ onClick, children, ...extar }: ButtonProps) => {
  const [loading, setLoading] = useState(false);
  const click = async (e: any) => {
    if (!(onClick && isFn(onClick))) return;
    const v = onClick(e);
    if (isPro(v)) {
      try {
        setLoading(true);
        await v;
      } catch (e) {}
      setLoading(false);
    }
  };
  return (
    <AndButton loading={loading} onClick={click} {...extar}>
      {children}
    </AndButton>
  );
});

export default Button;
