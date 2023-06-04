import styled from "styled-components";
import { bodyMixin, containerMixin } from "@styles/styled-components.mixins";
import mobilePattern from "@images/bg-intro-mobile.svg";
import desktopPattern from "@images/bg-intro-desktop.svg";

export const Hero = styled.section`
  position: relative;
`;

export const Pattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  aspect-ratio: 732/901;
  width: 100%;
  background-image: url("${mobilePattern}");
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: cover;
  transform: translateY(-16%);

  @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
    aspect-ratio: auto;
    height: ${({ theme }) => theme.pxToRem(416)};
    background-image: url("${desktopPattern}");
    background-position: center;
    background-size: contain;
    transform: none;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    left: 50%;
    width: ${({ theme }) => theme.pxToRem(1371)};
    height: ${({ theme }) => theme.pxToRem(956)};
    transform: translate(-12%, -24%);
  }
`;

export const Mockup = styled.img`
  position: relative;
  z-index: 90;
  width: 100%;
  transform: translateY(-30%);

  @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
    margin-left: auto;
    margin-right: auto;
    max-width: ${({ theme }) => theme.pxToRem(512)};
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    position: absolute;
    top: 0;
    left: 50%;
    max-width: ${({ theme }) => theme.pxToRem(732)};
    transform: translate(14%, -12%);
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
    padding-top: ${({ theme }) => theme.pxToRem(170)};
    padding-bottom: ${({ theme }) => theme.pxToRem(170)};
    text-align: left;
  }
`;

export const TextSection = styled.div`
  margin-top: -40%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
    margin-top: ${({ theme }) => theme.pxToRem(-180)};
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    margin-top: 0;
    align-items: flex-start;
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
