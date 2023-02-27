import { render, screen } from '@testing-library/react';
import VideoContainer from './VideoContainer';
import * as hooks from '../hooks/useElementOnScreen';

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

test('renders not playing correctly', () => {
  render(<VideoContainer />);
  const videoText = screen.getByText(/Not Playing/i);
  expect(videoText).toBeInTheDocument();
});

test('renders playing correctly', () => {
  jest.spyOn(hooks, 'useElementOnScreen').mockImplementation(() => true);
  render(<VideoContainer />);
  const videoText = screen.getByText(/Playing/i);
  expect(videoText).toBeInTheDocument();
});
