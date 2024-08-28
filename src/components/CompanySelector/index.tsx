import React from 'react';
import {sampleData} from '../../data/sampleData'

interface ProductSelectorProps {
    selectedCompany: string;
    setSelectedCompany: (product: string) => void;
}

const ProductSelector: React.FC<ProductSelectorProps> = ({ selectedCompany, setSelectedCompany }) => {
    const companiesNames = sampleData.map(el=> el.name);
    
    return (
    <div>
      <label htmlFor="product-selector">
        Select Company
      </label>
      <select
        id="product-selector"
        value={selectedCompany}
        onChange={(e) => setSelectedCompany(e.target.value)}
      >
        {companiesNames.map(el=>(
            <option value={el}>{el}</option>
        ))}
      </select>
    </div>
  );
};

export default ProductSelector;
