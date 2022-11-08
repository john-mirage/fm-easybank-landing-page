import styled from "styled-components";

export const Button = styled.button`
  padding: ${({ theme }) => `${theme.pxToRem(8)} ${theme.pxToRem(34)}`};
  border-radius: 9999px;
  background: linear-gradient(
    to bottom right,
    ${({ theme }) => `${theme.color.limeGreen}, ${theme.color.brightCyan}`}
  );
  font-size: ${({ theme }) => theme.pxToRem(14)};
  font-weight: 700;
  line-height: ${({ theme }) => theme.pxToRem(28)};
  color: ${({ theme }) => theme.color.white};
`;
