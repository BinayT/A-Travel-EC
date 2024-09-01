import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductPeriodSelector from './ProductPeriodSelector';

describe('ProductPeriodSelector Component', () => {
  const mockSetPeriod = jest.fn();

  beforeEach(() => {
    mockSetPeriod.mockClear();
  });

  test('renders with correct period options', () => {
    render(<ProductPeriodSelector period="last12Months" setPeriod={mockSetPeriod} />);

    // Checking if the label is rendered correctly..
    expect(screen.getByText(/select period/i)).toBeInTheDocument();

    // Checking if the options are rendered correctly as well.
    expect(screen.getByRole('option', { name: 'Last 12 Months' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Last 6 Months' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Last 3 Months' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Last Month' })).toBeInTheDocument();
  });

  test('sets the correct initial period value', () => {
    render(<ProductPeriodSelector period="last6Months" setPeriod={mockSetPeriod} />);

    // Here i am Checking if the correct value is selected initially
    expect(screen.getByRole('combobox')).toHaveValue('last6Months');
  });

  test('calls setPeriod with correct value on change', () => {
    render(<ProductPeriodSelector period="last12Months" setPeriod={mockSetPeriod} />);

    // This is simulating selecting a different period.
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'last3Months' } });

    // Here I Check if setPeriod was called with the correct value
    expect(mockSetPeriod).toHaveBeenCalledTimes(1);
    expect(mockSetPeriod).toHaveBeenCalledWith('last3Months');
  });
});
