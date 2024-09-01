import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductChart from './ProductChart';
import { ProductProps } from '../../types/datatypes/Product';

describe('ProductChart Component', () => {
  const mockProduct: ProductProps['product'] = {
    id: '2',
    name: 'lastminute.com',
    currentInventory: 230,
    salesData: {
      last12Months: [250, 220, 230, 210, 240, 200, 260, 190, 230, 180, 240, 170],
      last6Months: [260, 200, 230, 190, 240, 170],
      last3Months: [230, 190, 240],
      lastMonth: [240],
    },
    conversionRateData: {
      last12Months: [4.2, 3.6, 4.0, 3.5, 3.9, 3.4, 4.1, 3.3, 4.0, 3.2, 4.1, 3.5],
      last6Months: [4.1, 3.4, 4.0, 3.3, 4.1, 3.5],
      last3Months: [4.0, 3.3, 4.1],
      lastMonth: [4.1],
    },
    reviewTrendData: {
      last12Months: [4.7, 4.3, 4.5, 4.2, 4.6, 4.4, 4.3, 4.7, 4.5, 4.2, 4.4, 4.3],
      last6Months: [4.5, 4.2, 4.4, 4.7, 4.3, 4.5],
      last3Months: [4.4, 4.7, 4.5],
      lastMonth: [4.5],
    },
    latestComments: [
      {
        "name": "Sarah Wilson",
        "image": "https://randomuser.me/api/portraits/women/6.jpg",
        "comment": "Found the best last-minute deals on flights!",
        "timestamp": "21st Aug 2023 - 08:30"
      },
      {
        "name": "Chris Miller",
        "image": "https://randomuser.me/api/portraits/men/7.jpg",
        "comment": "Efficient booking and excellent customer support.",
        "timestamp": "18th Aug 2023 - 14:15"
      },
      {
        "name": "Laura Garcia",
        "image": "https://randomuser.me/api/portraits/women/8.jpg",
        "comment": "Easy to use and great options for spontaneous trips.",
        "timestamp": "16th Aug 2023 - 20:45"
      },
      {
        "name": "Tom Martinez",
        "image": "https://randomuser.me/api/portraits/men/9.jpg",
        "comment": "Flights were as described and on schedule.",
        "timestamp": "12th Aug 2023 - 07:00"
      },
      {
        "name": "Lisa Hernandez",
        "image": "https://randomuser.me/api/portraits/women/10.jpg",
        "comment": "Great discounts on last-minute bookings.",
        "timestamp": "8th Aug 2023 - 18:30"
      }
    ],
  }

  test('renders ProductChart with the correct components and data', () => {
    render(<ProductChart product={mockProduct} />);

    // Here I am checking if the ProductPeriodSelector is rendered.
    expect(screen.getByText('Select Period :')).toBeInTheDocument();

    // Here I am checking if all LineCharts are rendered with the correct headings.
    expect(screen.getByText('Conversion Rate Data')).toBeInTheDocument();
    expect(screen.getByText('Review Trend Data')).toBeInTheDocument();
    expect(screen.getByText('Sales Data')).toBeInTheDocument();
  });

  test('updates the charts when the period is changed', () => {
    render(<ProductChart product={mockProduct} />);

    // Change the period in ProductPeriodSelector and if the text on the combobox is the correct one.
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'last6Months' } });
    expect(screen.getByRole('combobox')).toHaveValue('last6Months');
  });
});
