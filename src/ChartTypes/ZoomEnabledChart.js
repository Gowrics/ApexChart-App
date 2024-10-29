import React from 'react';
import Chart from 'react-apexcharts';

const ZoomEnabledBarChart = () => {
  const chartOptions = {
    chart: {
      type: 'bar',
      zoom: { enabled: true },  // Enable zoom
    },
    plotOptions: {
      bar: {
        horizontal: false,  // Set to vertical for better zoom experience
        columnWidth: '100%',
        endingShape: 'rounded',
        dataLabels: {
          position: 'top',
        }
      },
    },
    xaxis: {
      categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
    },
    dataLabels: {
      enabled: false,  // Disable data labels globally
    },
    title: {
      text: 'Zoom Enabled Category Bar Chart',
    },
  };

  const chartSeries = [
    {
      name: 'Series 1',
      data: [30, 40, 45, 50, 49],
    },
    {
      name: 'Series 2',
      data: [20, 30, 35, 40, 45],
    },
  ];

  return (
    <div>
      <Chart options={chartOptions} series={chartSeries} type="bar" height={350} width={750} />
    </div>
  );
};

export default ZoomEnabledBarChart;
