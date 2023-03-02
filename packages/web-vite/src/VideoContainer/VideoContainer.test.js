import { render, screen } from '@testing-library/react';
import VideoContainer from './VideoContainer.jsx';
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

test('renders correctly', () => {
  render(<VideoContainer />);
  const videoElement = screen.getByTestId('video-element');
  expect(videoElement).toBeInTheDocument();
});
