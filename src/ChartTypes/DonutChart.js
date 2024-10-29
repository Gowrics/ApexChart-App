import React from "react";
import Chart from "react-apexcharts";

const DonutChart = () => {

  //  const [series, setSeries] = useState([                (donut charts generally support only one series)
//  { name: 'Sales', data: [30, 40, 35, 50, 49, 60, 70] },
// { name: 'Profit', data: [20, 30, 25, 40, 39, 50, 60] }
// ]);
  
  const chartOptions = {
    options: {                            //first property
      labels: ['A', 'B', 'C', 'D', 'E'],
      title: {
        text: 'Donut Chart', 
        style: {
          fontSize: '20px' // Specify a fontSize or any other styling properties here
        }
      }
    },
    series: [44, 55, 41, 17, 15],                      //second property
  };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={chartOptions.options}             
            series={chartOptions.series}
            type="donut"
            width="700"
            height="700"
          />
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
