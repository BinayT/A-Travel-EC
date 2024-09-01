import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LatestComments from './index';

const comments = [
  { name: 'John Doe', image: 'path/to/image1.jpg', comment: 'Great post!', timestamp: '19th Aug 2023 - 18:52' },
  { name: 'Jane Doe', image: 'path/to/image2.jpg', comment: 'Thanks for sharing!', timestamp: '17th Aug 2023 - 19:28' },
  { name: 'Mike Johnson', image: 'path/to/image3.jpg', comment: 'Great value for money on international flights.', timestamp: '15th Aug 2023 - 09:22' },
  { name: 'Emily Davis', image: 'path/to/image4.jpg', comment: 'Comfortable seats and on-time departures.', timestamp: '13th Aug 2023 - 17:00' },
  { name: 'David Brown', image: 'path/to/image5.jpg', comment: 'Highly recommend for hassle-free travel.', timestamp: '10th Aug 2023 - 16:45' }
];

describe('LatestComments Component', () => {
  test('renders the component using container and has expected classnames', () => {
    const { container } = render(<LatestComments comments={comments} />);
    expect(container.querySelectorAll('.latestComments__item').length).toBe(comments.length);
    expect(container.firstChild).toHaveClass('latestComments');
  });

  test('renders the title and total comments correctly', () => {
    render(<LatestComments comments={comments} />);
    expect(screen.getByText('Latest Comments')).toBeInTheDocument();
    expect(screen.getByText('Total Comments: 5')).toBeInTheDocument();
  });

  test('renders "No comments available" when comments array is empty', () => {
    render(<LatestComments comments={[]} />);
    expect(screen.getByText('No comments available.')).toBeInTheDocument();
  });

  test('renders "No comments available" when comments array is undefined', () => {
    render(<LatestComments />);
    expect(screen.getByText('No comments available.')).toBeInTheDocument();
  });

  test('renders each comment correctly', () => {
    render(<LatestComments comments={[comments[0]]} />);

    // Here checking the actual comment with relative info. 
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Great post!')).toBeInTheDocument();
    expect(screen.getByText('19th Aug 2023 - 18:52')).toBeInTheDocument();
    
    // Here checking the img tag with the corresponding url and classname. 
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('src', 'path/to/image1.jpg');
    expect(imgElement).toHaveClass('latestComments__userImage');
  });
});
