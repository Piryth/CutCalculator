import React from "react";
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
import {Line} from 'react-chartjs-2';

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
    plugins: {
        legend: {},
    },
    maintainAspectRatio: true
};
export default function ChartResult(props) {

    const dataPoids = props.dataPoids;
    const dataMg = props.dataMg;

    const labels = dataPoids.map(data => "semaine " + (data.semaine+1));

    const datasetPoids = {
        labels,
        datasets: [
            {
                label: 'Evolution du poids',
                yAxisID: 'A',
                data: dataPoids.map(data => data.x),
                borderColor: '#EF7674',
                backgroundColor: '#EF7674',
            },
            {
                label: 'Evolution de la masse grasse',
                yAxisID: 'B',
                data: dataMg.map(data => data.x),
                borderColor: '#007EA7',
                backgroundColor: '#007EA7',
            }

        ]
    }

    return <div className="chart-container">
        <Line options={options} data={datasetPoids} ></Line>
    </div>
}