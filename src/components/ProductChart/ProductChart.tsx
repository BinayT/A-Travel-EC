import React, { useState } from 'react';
import LineChart from '../LineChart/LineChart';
import './styles.css';
import { PeriodOption } from './periodOptions';
import { ProductProps } from '../datatypes/Product'
import ProductPeriodSelector from './ProductPeriodSelector/ProductPeriodSelector';

const ProductChart: React.FC<ProductProps> = ({ product }) => {
  const [period, setPeriod] = useState<PeriodOption>('last12Months');

  return (
    <div className='chartsContainer'>
      <ProductPeriodSelector period={period} setPeriod={setPeriod} />
      <div className='chartsContainer__charts'>
        <div>
          <h2 className='d-flex-jc-ac'>Conversion Rate Data</h2>
          <LineChart 
            data={product.conversionRateData} 
            label="Conversion Rate (%)" 
            width="400px" 
            height="400px" 
            period={period} 
            />
        </div>

        <div>
          <h2 className='d-flex-jc-ac'>Review Trend Data</h2>
          <LineChart 
            data={product.reviewTrendData} 
            label="Review Trend (1-5 Stars)" 
            width="400px" 
            height="400px" 
            period={period} 
          />
        </div>

        <div>
          <h2 className='d-flex-jc-ac'>Sales Data</h2>
          <LineChart 
            data={product.salesData} 
            label="Sales" 
            width="400px" 
            height="400px" 
            period={period} 
          />
        </div>
      </div>
    </div>
  );
};

export default ProductChart;
