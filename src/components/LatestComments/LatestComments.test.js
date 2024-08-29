import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LatestComments from '../path-to/LatestComments';

const commentsData = [
    {
        name: "John Doe",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        comment: "Excellent flight experience and customer service!",
        timestamp: "21st Aug 2023 - 14:45"
    },
    {
        name: "Jane Smith",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        comment: "Smooth booking process and reliable flights.",
        timestamp: "19th Aug 2023 - 11:30"
      },
      {
        name: "Mike Johnson",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        comment: "Great value for money on international flights.",
        timestamp: "15th Aug 2023 - 09:22"
      }
];

test('renders Latest Comments and comment items', () => {
  render(<LatestComments comments={commentsData} />);

  expect(screen.getByText('Latest Comments')).toBeInTheDocument();
  expect(screen.getByText('Total Comments: 1')).toBeInTheDocument();
  expect(screen.getByText('John Doe')).toBeInTheDocument();
  expect(screen.getByText('This is a comment.')).toBeInTheDocument();
});

test('handles empty comments array', () => {
  render(<LatestComments comments={[]} />);

  expect(screen.getByText('No comments available.')).toBeInTheDocument();
});

test('handles absence of comments prop', () => {
  render(<LatestComments />);

  expect(screen.getByText('No comments available.')).toBeInTheDocument();
});
