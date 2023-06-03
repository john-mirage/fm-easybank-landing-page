import styled from "styled-components";
import { bodyMixin, containerMixin } from "@styles/styled-components.mixins";
import mobilePattern from "@images/bg-intro-mobile.svg";
import desktopPattern from "@images/bg-intro-desktop.svg";

export const Hero = styled.section`
  padding-bottom: ${({ theme }) => theme.pxToRem(88)};
  background-image: url("${mobilePattern}");
  background-repeat: no-repeat;
  background-position: top -80px right;
  background-size: contain;

  @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
    background-position: top -280px right;
    background-size: 768px auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    background-position: top -480px right;
    background-size: 992px auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    background-image: none;
  }
`;

export const Container = styled.div`
  ${containerMixin}
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    flex-direction: row;
    text-align: left;
  }
`;

export const Mockup = styled.img`
  margin-top: -36%;
  margin-bottom: ${({ theme }) => theme.pxToRem(40)};
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    width: ${({ theme }) => theme.pxToRem(592)};
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    order: 2;
    flex: 1;
    margin-top: -500px;
    margin-bottom: -200px;
    margin-right: -500px;
    padding-left: 140px;
    padding-top: 400px;
    padding-right: 300px;
    background-image: url("${desktopPattern}");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom 48px right;
  }
`;

export const TextSection = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    margin-top: 64px;
    order: 1;
    width: 447px;
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
    margin-bottom: ${({ theme }) => theme.pxToRem(24)};
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
    margin-bottom: ${({ theme }) => theme.pxToRem(36)};
    max-width: ${({ theme }) => theme.pxToRem(448)};
    font-size: ${({ theme }) => theme.pxToRem(18)};
    line-height: ${({ theme }) => theme.pxToRem(28)};
    letter-spacing: ${({ theme }) => theme.pxToRem(-0.28)};
  }
`;
