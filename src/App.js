import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BarChart from './ChartTypes/BarChartjson';
import DonutChart from './ChartTypes/DonutChart';
import DynamicChart from './ChartTypes/DynamicUpdateChart';
import MultiChart from './ChartTypes/MultiChart';
import MyChart from './ChartTypes/MyChart';
import ZoomEnabledBarChart from './ChartTypes/ZoomEnabledChart';
import Navbar from './ChartTypes/Navbar';
import Home from './ChartTypes/Home';
import ParentComponent from './ParentComponent';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/bar" element={<BarChart />} />
          <Route path="/donut" element={<DonutChart />} />
          <Route path="/dynamic" element={<DynamicChart />} />
          <Route path="/multi" element={<MultiChart />} />
          <Route path="/mychart" element={<MyChart />} />
          <Route path="/reuse" element={<ParentComponent />} />
         </Routes>
      </div>
    </Router>
  );
};

export default App;
