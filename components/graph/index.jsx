import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Graph extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: [44, 55, 41, 17, 15],
      labels: ['A', 'B', 'C', 'D', 'E']
    }
  }

  render() {
    return (
      <Chart className="mt-10"
       options={this.state.options} series={this.state.series} type="donut" width="320" />
    );
  }
}

export default Graph;