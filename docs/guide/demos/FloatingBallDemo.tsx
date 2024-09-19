import React from 'react';

import { FloatingBall } from '@tc-lib/components';

export default () => {
  return (
    <div>
      <FloatingBall xProportion={0.5} yProportion={0.5}>
        <div
          style={{
            width: 100,
            height: 100,
            border: '1px solid #ccc',
            borderRadius: 5,
            padding: 8,
            background: '#999',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            lineHeight: '84px',
          }}
        >
          free
        </div>
      </FloatingBall>
      <FloatingBall type="left" yProportion={0.8}>
        <div
          style={{
            width: 100,
            height: 100,
            border: '1px solid #ccc',
            borderRadius: 5,
            padding: 8,
            background: '#999',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            lineHeight: '84px',
          }}
        >
          left
        </div>
      </FloatingBall>
      <FloatingBall type="right" yProportion={0.8}>
        <div
          style={{
            width: 100,
            height: 100,
            border: '1px solid #ccc',
            borderRadius: 5,
            padding: 8,
            background: '#999',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            lineHeight: '84px',
          }}
        >
          right
        </div>
      </FloatingBall>
    </div>
  );
};
