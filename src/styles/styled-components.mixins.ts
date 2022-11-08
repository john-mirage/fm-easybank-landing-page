import { css } from "styled-components";

export const screenReaderOnlyMixin = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

export const containerMixin = css`
  width: 100%;
  padding-left: ${({ theme }) => theme.pxToRem(24)};
  padding-right: ${({ theme }) => theme.pxToRem(24)};

  @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
    margin-left: auto;
    margin-right: auto;
    max-width: ${({ theme }) => theme.screen.sm};
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    max-width: ${({ theme }) => theme.screen.md};
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    max-width: ${({ theme }) => theme.screen.lg};
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.xl}) {
    max-width: ${({ theme }) => theme.screen.xl};
  }
`;

export const titleMixin = css`
  font-size: ${({ theme }) => theme.pxToRem(32)};
  font-weight: 300;
  line-height: ${({ theme }) => theme.pxToRem(38)};
  letter-spacing: ${({ theme }) => theme.pxToRem(-0.57)};
  color: ${({ theme }) => theme.color.darkBlue};
`;

export const bodyMixin = css`
  font-size: ${({ theme }) => theme.pxToRem(15)};
  font-weight: 400;
  line-height: ${({ theme }) => theme.pxToRem(25)};
  letter-spacing: ${({ theme }) => theme.pxToRem(-0.23)};
  color: ${({ theme }) => theme.color.grayishBlue};
`;
