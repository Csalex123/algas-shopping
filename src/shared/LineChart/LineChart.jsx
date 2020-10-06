import React from 'react';
import { Chart, ProgressBar } from './LineChart.styles';

const LineChart = ({ color, title = '', percentage }) => {
  return (
    <Chart>
      <span>{title}</span>
      <ProgressBar color={color} percentage={percentage} />
    </Chart>
  );
};

export default LineChart;
