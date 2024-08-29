import { useState } from 'react'
import './App.css'
import ProductSelector from './components/CompanySelector';
import { sampleData } from './data/sampleData';
import LatestComments from './components/LatestComments';
import InventoryStatus from './components/Inventory';
import ProductChart from './components/ProductChart/ProductChart';
import ReportButton from './components/PdfReport/PdfReport';


function App() {
  const [selectedCompany, setSelectedCompany] = useState('kiwi.com');
  const currentCompanyData = sampleData.find((product) => product.name === selectedCompany);
  
  return (
    <div className='root-container'>
      <div className='main-container'>
      <ProductSelector selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany} />
      <InventoryStatus currentInventory={currentCompanyData!.currentInventory} />
      {currentCompanyData  && <>
        <ReportButton product={currentCompanyData} />
        <ProductChart product={currentCompanyData} />
        <LatestComments comments={currentCompanyData!.latestComments} />
      </>}
      </div>
    </div>
  )
}

export default App
