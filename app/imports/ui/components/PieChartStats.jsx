import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

// Count the number of containers in the container DB

// Create a percentage
// Data for the pie chart
const data = {
  labels: [
    '95%',
  ],
  datasets: [{
    label: 'Container Retention Rate:',
    data: [90, 10],
    backgroundColor: [
      'rgb(0, 219, 0)',
      'rgb(256, 256, 256)',
    ],
    hoverOffset: 4,
  }],
};

const options = {
  aspectRatio: 3,
};

/** Renders a doughnut pie chart with data. */
const PieChartStats = () => (
  <Doughnut data={data} options={options} />
);

export default PieChartStats;
