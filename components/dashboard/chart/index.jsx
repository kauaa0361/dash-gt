import { Title } from '../custom';
import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Chart() {

    const options = {
    series: [44, 55],
    labels: ['A', 'B', 'C', 'D', 'E']
    }

  return (
    <ApexCharts 
    options={options} 
    series={options.series} 
    type="donut" 
    width="320" />
  );
}