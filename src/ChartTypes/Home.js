// Home.js
import React from 'react';
import './Home.css'; // Optional: You can add CSS for styling

const Home = () => {
  return (
    <div className="home">
      <h1>ApexCharts Exploration</h1>
      <p>Welcome to the ApexCharts exploration app!</p>
      <p>Select a chart type from the navigation bar to get started.</p>
      <p>
        This application showcases various types of charts, including:
      </p>
      <ul>
        <li>Bar Charts</li>
        <li>Line Charts</li>
        <li>Donut Charts</li>
        <li>Dynamic Data Charts</li>
        <li>Multi Charts</li>
        <li>Zoom Enabled Charts</li>
      </ul>
      <p>Explore and enjoy visualizing your data!</p>
    </div>
  );
};

export default Home;
