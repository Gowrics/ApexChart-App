
import React, { Component } from "react";
import Chart from "react-apexcharts";

const MyChart=()=>{
   const state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        colors: ['#FF1654', '#247BA0'],

        title:{text:'Basic bar chart'},
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "Emp1-salary",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        },
        {
          name: "Emp2-salary",
          data: [40, 45, 55, 60, 79, 80, 88, 100]
        }
      ]
    };
  

    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="1000"
            />
          </div>
        </div>
      </div>
    );
  
}
export default MyChart;
