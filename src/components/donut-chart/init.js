import DonutChart from './DonutChart';

const { chartOptions } = require('./donut-chart.json');

const myChart = document.querySelector('.js-chart__diagram');
new DonutChart(myChart, chartOptions);
