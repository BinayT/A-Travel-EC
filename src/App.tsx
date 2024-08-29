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
      {currentCompanyData  && <>
        <ReportButton product={currentCompanyData} />
        <InventoryStatus currentInventory={currentCompanyData!.currentInventory} />
        <ProductChart product={currentCompanyData} />
        <LatestComments comments={currentCompanyData!.latestComments} />
      </>}
      </div>
    </div>
  )
}

export default App
