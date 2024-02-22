'use client'

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
      text: '',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Earning',
      data: [4500, 7600, 1000, 6790, 6000, 5000, 4500], 
      backgroundColor: 'rgba(34 197 94)',
    },
    {
      label: 'Spent',
      data: [1000, 5000, 3000, 4000, 600, 500, 3200],
      backgroundColor: 'rgba(234 179 8)',
    },
  ],
};

function BarChart() {
  return (
  <div className="w-full h-full flex flex-col px-4 py-4 bg-green-500/10 rounded-xl">
            <h3 className='text-lg text-green-500 font-semibold'>Activity</h3>
           <Bar options={options} data={data} className='w-full h-full' />;
        </div>
)}

export default BarChart;
