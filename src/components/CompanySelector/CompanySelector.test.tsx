// src/components/ProductSelector/ProductSelector.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CompanySelector from './index';
import { sampleData } from '../../data/sampleData';

// I am mocking the sample data here.
jest.mock('../../data/sampleData', () => ({
  sampleData: [
    { name: 'kiwi.com' },
    { name: 'lastminute.com' },
    { name: 'Globespan' },
  ],
}));

describe('CompanySelector Component', () => {
  const mockSetSelectedCompany = jest.fn();

  beforeEach(() => {
    mockSetSelectedCompany.mockClear();
  });

  test('renders the component using container and has expected classnames.', () => {
    // Basic test.
    const { container } = render(<CompanySelector selectedCompany="" setSelectedCompany={mockSetSelectedCompany} />);
    expect(container.firstChild).toHaveClass('companySelector');
  });

  test('renders without crashing and shows the correct options', () => {
    render(<CompanySelector selectedCompany="" setSelectedCompany={mockSetSelectedCompany} />);
    // Here I am checking if the label is rendered
    expect(screen.getByLabelText(/select company/i)).toBeInTheDocument();

    // Here I'm checking if the options are rendered
    const options = screen.getAllByRole('option');
    expect(options.length).toBe(sampleData.length); // Expect 3 options

    // Checking done for weather the correct company names are in the options
    sampleData.forEach((company, index) => {
      expect(options[index]).toHaveTextContent(company.name);
    });
  });

  test('calls setSelectedCompany when a new company is selected', () => {
    render(<CompanySelector selectedCompany="kiwi.com" setSelectedCompany={mockSetSelectedCompany} />);

    // Here I am simulating selecting a new company
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'lastminute.com' } });

    // Finally checking if setSelectedCompany was called with the correct value
    expect(mockSetSelectedCompany).toHaveBeenCalledTimes(1);
    expect(mockSetSelectedCompany).toHaveBeenCalledWith('lastminute.com');
  });

  test('sets the correct company as the selected value', () => {
    render(<CompanySelector selectedCompany="Globespan" setSelectedCompany={mockSetSelectedCompany} />);

    // Here I'm checking if the correct value is selected
    expect(screen.getByRole('combobox')).toHaveValue('Globespan');
  });
});
