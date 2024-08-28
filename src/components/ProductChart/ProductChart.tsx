// ProductChart.tsx
import React, { useState } from 'react';
import LineChart from '../LineChart/LineChart';
import './styles.css';

interface Product {
  id: string;
  name: string;
  currentInventory: number;
  salesData: {
    last12Months: number[];
    last6Months: number[];
    last3Months: number[];
    lastMonth: number[];
  };
  conversionRateData: {
    last12Months: number[];
    last6Months: number[];
    last3Months: number[];
    lastMonth: number[];
  };
  reviewTrendData: {
    last12Months: number[];
    last6Months: number[];
    last3Months: number[];
    lastMonth: number[];
  };
  latestComments: string[];
}

interface ProductChartProps {
  product: Product;
}

type PeriodOption = 'last12Months' | 'last6Months' | 'last3Months' | 'lastMonth';

const ProductChart: React.FC<ProductChartProps> = ({ product }) => {
  const [period, setPeriod] = useState<PeriodOption>('last12Months');

  return (
    <div className='charts-container'>
      <div>
        <h2>{product.name} - Conversion Rate Data</h2>
        <LineChart 
          data={product.conversionRateData} 
          label="Conversion Rate (%)" 
          width="400px" 
          height="400px" 
          period={period} 
          />
      </div>

      <div>
        <h2>{product.name} - Review Trend Data</h2>
        <LineChart 
          data={product.reviewTrendData} 
          label="Review Trend (1-5 Stars)" 
          width="400px" 
          height="400px" 
          period={period} 
        />
      </div>

      <div>
        <h2>{product.name} - Sales Data</h2>
        <LineChart 
          data={product.salesData} 
          label="Sales" 
          width="400px" 
          height="400px" 
          period={period} 
        />
      </div>

      {/* <div>
        <button onClick={() => setPeriod('last12Months')}>Last 12 Months</button>
        <button onClick={() => setPeriod('last6Months')}>Last 6 Months</button>
        <button onClick={() => setPeriod('last3Months')}>Last 3 Months</button>
        <button onClick={() => setPeriod('lastMonth')}>Last Month</button>
      </div> */}
    </div>
  );
};

export default ProductChart;
