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
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => Math.floor(Math.random() * 1000)),
            borderColor: 'rgb(34 197 94)',
            backgroundColor: 'rgba(34 197 94 / 50%)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => Math.floor(Math.random() * 1000)),
            // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(234 179 8)',
            backgroundColor: 'rgba(234 179 8 / 50%)',
        },
    ],
};

export default function LineChart() {
    return (
        <div className="w-full h-full flex flex-col px-4 py-4 bg-green-500/10 rounded-xl">
            <h3 className='h3'>Overview</h3>
            <Line options={options} data={data} className='w-full h-full' />
        </div>
    );
}
