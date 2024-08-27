import React from 'react';

interface InventoryProps {
  currentInventory: number;
}

const InventoryStatus: React.FC<InventoryProps> = ({ currentInventory }) => {
  return (
    <div>
      <span>Current Inventory - </span>
      <span>{currentInventory}</span>
    </div>
  );
};

export default InventoryStatus;
