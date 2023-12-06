import { ContinuousNumberSelect } from '@tc-lib/components';
import { Typography } from 'antd';
import React, { useState } from 'react';
const { Title } = Typography;
export default () => {
  const [dayValue, setDayValue] = useState([1, 2, 3, 20, 22, 23, 24]);
  const [weekValue, setWeekValue] = useState([1, 2, 3, 7]);
  return (
    <>
      <Title level={5}>日期</Title>
      <ContinuousNumberSelect value={dayValue} onChange={setDayValue} />
      <Title level={5}>周</Title>
      <ContinuousNumberSelect
        optionType="week"
        value={weekValue}
        onChange={setWeekValue}
      />
    </>
  );
};
