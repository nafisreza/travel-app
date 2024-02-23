'use client'

import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
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
            label: 'Income',
            data: labels.map(() => Math.floor(Math.random() * 1000)),
            borderColor: 'rgb(34 197 94)',
            backgroundColor: 'rgba(34 197 94)',
        },
        {
            label: 'Expenses',
            data: labels.map(() => Math.floor(Math.random() * 1000)),
            borderColor: 'rgb(234 179 8)',
            backgroundColor: 'rgba(234 179 8)',
        },
    ],
};

export default function LineChart() {
    return (
        <div className="w-full h-full flex flex-col px-4 py-4 bg-green-500/10 rounded-xl">
            <h3 className='text-xl mb-4 text-green-500 font-semibold'>Overview</h3>
            <Line options={options} data={data} className='w-full h-full' />
        </div>
    );
}
