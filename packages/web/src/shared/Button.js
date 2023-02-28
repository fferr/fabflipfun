import React from 'react';
// import { DesktopButton } from 'commons';

const Button = ({ onClick, children }) => (
  <button className="shared-button" type="button" onClick={onClick}>
    {children}
  </button>
);

export default Button;
