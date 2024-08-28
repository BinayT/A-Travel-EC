import { useState } from 'react'
import './App.css'
import ProductSelector from './components/CompanySelector';
import { sampleData } from './data/sampleData';
import LatestComments from './components/LatestComments';
import InventoryStatus from './components/Inventory';
import ProductChart from './components/ProductChart/ProductChart';


function App() {
  const [selectedCompany, setSelectedCompany] = useState('kiwi.com');
  const currentCompanyData = sampleData.find((product) => product.name === selectedCompany);
  console.log(currentCompanyData);
  
  return (
    <div className='main-container'>
      <ProductSelector selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany} />
      <InventoryStatus currentInventory={currentCompanyData!.currentInventory} />
      <ProductChart product={currentCompanyData} />
      <LatestComments comments={currentCompanyData!.latestComments} />
    </div>
  )
}

export default App
