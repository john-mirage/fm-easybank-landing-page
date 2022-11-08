import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.pxToRem(48)};
  height: ${({ theme }) => theme.pxToRem(48)};
`;
