import styled from "styled-components";

export const Button = styled.button`
  position: relative;
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
  overflow: hidden;
`;

export const Overlay = styled.span`
  position: absolute;
  inset: 0;
  background-color: hsla(0, 0%, 100%, 40%);
  visibility: hidden;
  opacity: 0;

  @media screen and (hover: hover) {
    ${Button}:hover & {
      visibility: visible;
      opacity: 1;
    }
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    transition-property: visibility, opacity;
    transition-duration: 150ms;
  }
`;
