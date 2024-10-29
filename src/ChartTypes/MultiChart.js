import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const MultiChart = () => {
  const [series, setSeries] = useState([
    { name: 'Sales', data: [30, 40, 35, 50, 49, 60, 70] },
    { name: 'Profit', data: [20, 30, 25, 40, 39, 50, 60] }

  ]);

  const options = {
    chart: {
      type: 'line',
      zoom: { enabled: true },
      events: {
        dataPointMouseEnter: (event, chartContext, config) => {
          console.log(config.dataPointIndex);
        }
      },
    },
    title: { text: 'Sales vs Profit', align: 'left' },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    colors: ['#FF1654', '#247BA0'],
  };

  return (
    <div>
      <Chart options={options} series={series} type="line" height={350} width={1100} />
    </div>
  );
};

export default MultiChart;
