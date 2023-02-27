import React from 'react';
import './Button.css';

const Button = ({ onClick, children }) => (
  <button className="shared-button" type="button" onClick={onClick}>
    {children}
  </button>
);

export default Button;
