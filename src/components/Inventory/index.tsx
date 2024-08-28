import React from 'react';
import './styles.css';

interface InventoryProps {
  currentInventory: number;
}

const InventoryStatus: React.FC<InventoryProps> = ({ currentInventory }) => {
  return (
    <div className='current-inventory'>
      <span>Current Inventory - </span>
      <span>{currentInventory}</span>
    </div>
  );
};

export default InventoryStatus;
