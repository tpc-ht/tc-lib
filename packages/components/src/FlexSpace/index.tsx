import React, { FC, memo } from 'react';

export interface FlexSpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'end' | 'center' | 'baseline';
  justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around';
  direction?: 'column' | 'row';
  size?: number;
  wrap?: boolean;
}
const FlexSpace: FC<FlexSpaceProps> = memo(
  ({
    align,
    direction = 'row',
    justify = 'start',
    wrap = false,
    size = 8,
    children,
    style,
    ...e
  }) => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: align,
          flexWrap: wrap ? 'wrap' : 'nowrap',
          flexDirection: direction,
          justifyContent: justify,
          gap: size,
          ...style,
        }}
        {...e}
      >
        {children}
      </div>
    );
  },
);

export default FlexSpace;
