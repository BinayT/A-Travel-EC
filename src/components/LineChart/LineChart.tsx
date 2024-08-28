// LineChart.tsx
import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import './styles.css';

Chart.register(...registerables);

interface LineChartProps {
  data: {
    last12Months: number[];
    last6Months: number[];
    last3Months: number[];
    lastMonth: number[];
  };
  label: string;
  width: string;
  height: string;
  period: 'last12Months' | 'last6Months' | 'last3Months' | 'lastMonth';
}

const LineChart: React.FC<LineChartProps> = ({ data, label, period }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext('2d');

    if (ctx) {
      const chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: Array.from({ length: data[period].length }, (_, i) => `${i + 1}`),
          datasets: [
            {
              label,
              data: data[period],
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              beginAtZero: true,
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      // Cleanup function to destroy chart instance
      return () => {
        if (chart) {
          chart.destroy();
        }
      };
    }
  }, [data, period, label]);

  return (
    <div className='line-chart-container'>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default LineChart;
