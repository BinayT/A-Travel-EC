import React from 'react';
import {sampleData} from '../../data/sampleData'
import './styles.css';

interface ProductSelectorProps {
    selectedCompany: string;
    setSelectedCompany: (product: string) => void;
}

const ProductSelector: React.FC<ProductSelectorProps> = ({ selectedCompany, setSelectedCompany }) => {
    // Here I am getting the names of all the companies that we have in our DB.
    const companiesNames = sampleData.map(el=> el.name);
    
    return (
    <div className='companySelector d-flex-jc-ac'>
      <label htmlFor="product-selector" className='companySelector__text'>
        Select Company
      </label>
      <select
        id="product-selector"
        className='companySelector__selector'
        value={selectedCompany}
        onChange={(e) => setSelectedCompany(e.target.value)}
      >
        {companiesNames.map((el, i)=>(
            <option value={el} key={i}>{el}</option>
        ))}
      </select>
    </div>
  );
};

export default ProductSelector;
