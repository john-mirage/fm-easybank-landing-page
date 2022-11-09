import styled from "styled-components";
import { bodyMixin, containerMixin } from "@styles/styled-components.mixins";

export const Hero = styled.section``;

export const Image = styled.div`
  height: ${({ theme }) => theme.pxToRem(282)};

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    display: none;
  }
`;

export const Container = styled.div`
  ${containerMixin}
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: ${({ theme }) => theme.pxToRem(88)};

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    align-items: flex-start;
    text-align: left;
    padding-top: ${({ theme }) => theme.pxToRem(170)};
    padding-bottom: ${({ theme }) => theme.pxToRem(170)};
  }
`;

export const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.pxToRem(16)};
  max-width: ${({ theme }) => theme.pxToRem(420)};
  font-size: ${({ theme }) => theme.pxToRem(40)};
  font-weight: 300;
  line-height: ${({ theme }) => theme.pxToRem(47)};
  letter-spacing: ${({ theme }) => theme.pxToRem(-0.71)};
  color: ${({ theme }) => theme.color.darkBlue};

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    font-size: ${({ theme }) => theme.pxToRem(56)};
    line-height: ${({ theme }) => theme.pxToRem(64)};
    letter-spacing: ${({ theme }) => theme.pxToRem(-1)};
  }
`;

export const Subtitle = styled.p`
  ${bodyMixin}
  margin-bottom: ${({ theme }) => theme.pxToRem(32)};
  max-width: ${({ theme }) => theme.pxToRem(360)};
  color: ${({ theme }) => theme.color.grayishBlue};

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    font-size: ${({ theme }) => theme.pxToRem(18)};
    line-height: ${({ theme }) => theme.pxToRem(28)};
    letter-spacing: ${({ theme }) => theme.pxToRem(-0.28)};
  }
`;
