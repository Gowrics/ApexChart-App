import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active link styles
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/bar" activeClassName="active">Chart using JSON</NavLink></li>
        <li><NavLink to="/donut" activeClassName="active">Donut Chart</NavLink></li>
        <li><NavLink to="/dynamic" activeClassName="active">Dynamic Chart</NavLink></li>
        <li><NavLink to="/multi" activeClassName="active">Line  Chart</NavLink></li>
        <li><NavLink to="/mychart" activeClassName="active">Bar Chart</NavLink></li>
        <li><NavLink to="/reuse" activeClassName="active">Reusable Component</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
