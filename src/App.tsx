import { useState } from 'react'
import './App.css'
import ProductSelector from './components/CompanySelector';

function App() {
  const [selectedProduct, setSelectedProduct] = useState('kiwi.com');

  return (
    <div className='main-container'>
       <ProductSelector selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
    </div>
  )
}

export default App
