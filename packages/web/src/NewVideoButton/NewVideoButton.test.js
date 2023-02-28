import { NewVideoButton } from './index';
import { render, screen } from '@testing-library/react';

describe('NewVideoButton', () => {
  const props = {
    visible: true,
    onClick: jest.fn(),
  };
  it('renders without crashing', () => {
    render(<NewVideoButton {...props} />);

    expect(screen.getByTestId('new-video-button')).toBeInTheDocument();
  });
});
