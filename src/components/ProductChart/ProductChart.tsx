import React, { useState } from 'react';
import LineChart from '../LineChart/LineChart';
import './styles.css';
import { PeriodOption } from './periodOptions';
import ProductPeriodSelector from './ProductPeriodSelector/ProductPeriodSelector';

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


const ProductChart: React.FC<ProductChartProps> = ({ product }) => {
  const [period, setPeriod] = useState<PeriodOption>('last12Months');

  return (
    <div className='charts-container'>
      <div>
        <h2 className='data-type'>Conversion Rate Data</h2>
        <LineChart 
          data={product.conversionRateData} 
          label="Conversion Rate (%)" 
          width="400px" 
          height="400px" 
          period={period} 
          />
      </div>

      <div>
        <h2 className='data-type'>Review Trend Data</h2>
        <LineChart 
          data={product.reviewTrendData} 
          label="Review Trend (1-5 Stars)" 
          width="400px" 
          height="400px" 
          period={period} 
        />
      </div>

      <div>
        <h2 className='data-type'>Sales Data</h2>
        <LineChart 
          data={product.salesData} 
          label="Sales" 
          width="400px" 
          height="400px" 
          period={period} 
        />
      </div>

      <ProductPeriodSelector period={period} setPeriod={setPeriod} />
    </div>
  );
};

export default ProductChart;
