import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const DynamicChart = () => {
  const [data, setData] = useState({
    series: [{ name: 'Sample Data', data: [30, 40, 35, 50, 49, 60, 70, 91, 125] }],
    options: {
      chart: { type: 'line' },
      xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'] },
      title: { text: 'Dynamic Line Chart', align: 'center' },
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = data.series[0].data.map(() => Math.floor(Math.random() * 100));
      setData(prevState => ({ ...prevState, series: [{ name: 'Sample Data', data: newData }] }));
    }, 1000); // Update every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [data.series]);

  return (
    <div>
      <Chart height={550} width={1000} options={data.options} series={data.series} type="bar" />
    </div>
  );
};

export default DynamicChart;
