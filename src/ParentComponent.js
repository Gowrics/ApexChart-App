// ParentComponent.js
import React from 'react';
import ReusableChart from './ChartTypes/ReusableChart';

const ParentComponent = () => {
  const barChartData = {
    title: 'Sales Data (Bar Chart)',
    categories: ['Product A', 'Product B', 'Product C'],
    seriesData: [
      {
        name: 'Sales',
        data: [30, 40, 45],
      },
    ],
    yAxisTitle: 'Sales',
    tooltipEnabled: true,
  };

  const lineChartData = {
    title: 'Trend Data (Line Chart)',
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    seriesData: [
      {
        name: 'Trends',
        data: [20, 40, 35, 50, 49, 60],
      },
    ],
    yAxisTitle: 'Values',
    tooltipEnabled: true,
  };

  return (
    <div>
      <h1>ApexCharts Reusable Component Example</h1>
      <ReusableChart 
        chartType="bar"
        title={barChartData.title}
        categories={barChartData.categories}
        seriesData={barChartData.seriesData}
        yAxisTitle={barChartData.yAxisTitle}
        tooltipEnabled={barChartData.tooltipEnabled}
      />
      <ReusableChart 
        chartType="line"
        title={lineChartData.title}
        categories={lineChartData.categories}
        seriesData={lineChartData.seriesData}
        yAxisTitle={lineChartData.yAxisTitle}
        tooltipEnabled={lineChartData.tooltipEnabled}
      />
    </div>
  );
};

export default ParentComponent;
