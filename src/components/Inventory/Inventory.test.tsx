import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import InventoryStatus from './index';

const currentInventory = 100;

describe('InventoryStatus Component', () => {
      test('renders the component using container and has expected classnames.', () => {
        const { container } = render(<InventoryStatus currentInventory={currentInventory} />);
        // Checking if the main container has the classname.
        expect(container.firstChild).toHaveClass('currentInventory');
      });

      test('renders current inventory status corectly.', () => {
        render(<InventoryStatus currentInventory={currentInventory} />);
        // Checking if the label is correctly rendered.
        const inventoryDiv = screen.getByText('Current Inventory -').closest('div');
        expect(inventoryDiv).toBeInTheDocument();
        expect(within(inventoryDiv!).getByText('100')).toBeInTheDocument();
      });
});
