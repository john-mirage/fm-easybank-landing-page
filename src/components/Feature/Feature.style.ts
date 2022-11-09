import { bodyMixin } from "@styles/styled-components.mixins";
import styled from "styled-components";

export const Feature = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    align-items: flex-start;
    text-align: left;
  }
`;

export const Name = styled.h3`
  margin-top: ${({ theme }) => theme.pxToRem(24)};
  margin-bottom: ${({ theme }) => theme.pxToRem(16)};
  font-size: ${({ theme }) => theme.pxToRem(20)};
  font-weight: 300;
  line-height: ${({ theme }) => theme.pxToRem(28)};
  letter-spacing: ${({ theme }) => theme.pxToRem(-0.36)};
  color: ${({ theme }) => theme.color.darkBlue};

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    margin-top: ${({ theme }) => theme.pxToRem(40)};
    margin-bottom: ${({ theme }) => theme.pxToRem(26)};
    font-size: ${({ theme }) => theme.pxToRem(24)};
    line-height: ${({ theme }) => theme.pxToRem(28)};
    letter-spacing: ${({ theme }) => theme.pxToRem(-0.43)};
  }
`;

export const Description = styled.p`
  ${bodyMixin}
  max-width: ${({ theme }) => theme.pxToRem(360)};
  color: ${({ theme }) => theme.color.grayishBlue};

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    font-size: ${({ theme }) => theme.pxToRem(16)};
    line-height: ${({ theme }) => theme.pxToRem(26)};
    letter-spacing: ${({ theme }) => theme.pxToRem(-0.25)};
  }
`;
