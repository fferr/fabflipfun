import styled from "styled-components";

const baseButtonStyle = `
  font-family: "Nunito Sans", sans-serif;
  font-weight: 400;
  font-color: white;
  background-color: #fb6a66;
  font-size: 16px;
  border: none;
  background: none;
`;

export const DesktopButton = styled.button`
  ${baseButtonStyle}
  height: 48px;
  &:hover {
    cursor: pointer;
  }
`;
