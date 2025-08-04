// File: templates/react/dashboard-admin/src/components/Chart.jsx
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
    responsive: true,
    plugins: { legend: { position: 'top' }, title: { display: true, text: 'Monthly Revenue' } },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => Math.floor(Math.random() * 2000) + 1000),
            borderColor: 'rgb(250, 204, 21)',
            backgroundColor: 'rgba(250, 204, 21, 0.5)',
        },
    ],
};

function Chart() {
    return <Line options={options} data={data} />;
}
export default Chart;
