import React from 'react';
import {mockProducts} from '../../data/sampleData'

interface ProductSelectorProps {
  selectedProduct: string;
  setSelectedProduct: (product: string) => void;
}

const ProductSelector: React.FC<ProductSelectorProps> = ({ selectedProduct, setSelectedProduct }) => {
    const companiesNames = mockProducts.map(el=> el.name);
    
    return (
    <div>
      <label htmlFor="product-selector">
        Select Company
      </label>
      <select
        id="product-selector"
        value={selectedProduct}
        onChange={(e) => setSelectedProduct(e.target.value)}
      >
        {companiesNames.map(el=>(
            <option value={el}>{el}</option>
        ))}
      </select>
    </div>
  );
};

export default ProductSelector;
