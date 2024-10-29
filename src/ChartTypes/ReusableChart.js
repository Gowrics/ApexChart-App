// ReusableChart.js
import React from 'react';
import Chart from 'react-apexcharts';

const ReusableChart = ({ chartType, title, categories, seriesData, yAxisTitle, tooltipEnabled, height, width }) => {
  const chartOptions = {
    chart: {
      type: chartType,
      height: height || 350,
      width: width || 500,
    },
    title: {
      text: title,
      align: 'center',
    },
    xaxis: {
      categories: categories,
    },
    yaxis: {
      title: {
        text: yAxisTitle,
      },
    },
    tooltip: {
      enabled: tooltipEnabled,
    },
    legend: {
      show: true,
      position: 'top',
    },
  };

  return (
    <div>
      <Chart options={chartOptions} series={seriesData} type={chartType} height={height || 350} width={width || 500} />
    </div>
  );
};

export default ReusableChart;
