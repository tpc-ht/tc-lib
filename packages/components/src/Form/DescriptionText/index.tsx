import { Typography } from 'antd';
import { TextProps } from 'antd/lib/typography/Text';
import React from 'react';
const { Text } = Typography;
export const DescriptionText = (props: TextProps) => (
  <Text type="secondary" {...props} />
);
