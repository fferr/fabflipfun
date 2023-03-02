import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button.jsx';

test('renders button correctly', async () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick}>Test Button</Button>);
  const buttonText = screen.getByText(/Test Button/i);
  expect(buttonText).toBeInTheDocument();
  const button = screen.getByRole('button');
  await fireEvent.click(button);
  expect(onClick).toHaveBeenCalled();
});
