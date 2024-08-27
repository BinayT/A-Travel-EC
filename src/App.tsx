import { useState } from 'react'
import './App.css'
import ProductSelector from './components/CompanySelector';
import { mockProducts } from './data/sampleData';
import LatestComments from './components/LatestComments';


function App() {
  const [selectedCompany, setSelectedCompany] = useState('kiwi.com');
  const currentCompanyData = mockProducts.find((product) => product.name === selectedCompany);

  return (
    <div className='main-container'>
      <ProductSelector selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany} />
      <LatestComments comments={currentCompanyData!.latestComments} />
    </div>
  )
}

export default App
