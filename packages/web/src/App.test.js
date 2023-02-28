import { render, screen } from '@testing-library/react';
import App from './App';
import * as hooks from './hooks/useElementOnScreen';

describe('App', () => {
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

  test('renders initial videos', () => {
    render(<App />);
    const videos = screen.getAllByTestId(/video-element/i);
    expect(videos).toHaveLength(4);
  });

  test('renders more videos after scrolling', () => {
    jest.spyOn(hooks, 'useElementOnScreen').mockImplementation(() => true);
    render(<App />);
    const videos = screen.getAllByTestId(/video-element/i);
    expect(videos).toHaveLength(8);
  });
});
