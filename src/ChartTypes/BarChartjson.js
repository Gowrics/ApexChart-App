import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const BarChart = () => {
  // State Variables
  const [products, setProducts] = useState([]); // Changed to products
  const [seriesData, setSeriesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data...');
        const response = await fetch('http://localhost:8000/data'); // Ensure this endpoint returns product sales data
        if (!response.ok) throw new Error('Network response was not ok');

        const jsonData = await response.json();
        console.log('Fetched Data:', jsonData); // Log fetched data

        // Check if jsonData is an array of product sales
        if (Array.isArray(jsonData)) {
          const productNames = jsonData.map(item => item.product); // Assuming your JSON has "product"
          const salesValues = jsonData.map(item => item.sales); // Assuming your JSON has "sales"
          setProducts(productNames);
          setSeriesData([{ name: 'Sales', data: salesValues }]);
        } else {
          console.error('Fetched data is not an array:', jsonData);
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  const chartOptions = {
    chart: {
      type: 'bar',
    },
    xaxis: {
      categories: products, // Changed to products
    },
    title: {
      text: 'Product Sales Bar Chart',
    },
  };

  return (
    <div>
      <h1>Bar Chart - Product Sales</h1>

      {seriesData.length > 0 ? (
        <Chart options={chartOptions} series={seriesData} type="bar" height={350} width={1000} />
      ) : (
        <p>Loading data... Please check your server and data format.</p>
      )}
    </div>
  );
};

export default BarChart;
