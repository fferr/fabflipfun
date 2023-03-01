import styled from 'styled-components';

const baseButtonStyle = `
  border: none;
  background: none;
  font-family: "Nunito Sans", sans-serif;
  font-weight: bold;
  color: white;
  font-size: 16px;
  letter-spacing: 1px;
  background-color: #fb6a66;
  border-radius: 3px;
`;

export const DesktopButton = styled.button`
  ${baseButtonStyle}
  height: 48px;
  &:hover {
    cursor: pointer;
  }
`;
