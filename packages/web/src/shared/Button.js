import React from 'react';
import { DesktopButton } from '../styled-components/Button';

const Button = ({ onClick, children }) => (
  <DesktopButton className="shared-button" type="button" onClick={onClick}>
    {children}
  </DesktopButton>
);

export default Button;
