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
  maintainAspectRatio: false,
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

const labels = ['January', 'February', 'March', 'April'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Earning',
      data: [4500, 7600, 1000, 6790], 
      backgroundColor: 'rgba(34 197 94)',
    },
    {
      label: 'Spent',
      data: [1000, 5000, 3000, 4000],
      backgroundColor: 'rgba(234 179 8)',
    },
  ],
};

function BarChart() {
  return (
  <div className="w-full h-full flex justify-center flex-col px-4 py-4 bg-green-500/10 rounded-xl">
            <h3 className='text-xl mb-4 text-green-500 font-semibold'>Activity</h3>
           <div className='h-72'>
           <Bar options={options} data={data} className='w-full h-full' />
           </div>
        </div>
)}

export default BarChart;
