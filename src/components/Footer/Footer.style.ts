import { bodyMixin, containerMixin } from "@styles/styled-components.mixins";
import styled from "styled-components";
import { Logo as BaseLogo } from "@components/Icon";
import BaseButton from "@components/Button";
import BaseSocialNavigation from "@components/SocialNavigation";
import FooterNavigation from "@components/FooterNavigation";

export const Footer = styled.footer`
  padding-top: ${({ theme }) => theme.pxToRem(40)};
  padding-bottom: ${({ theme }) => theme.pxToRem(40)};
  background-color: ${({ theme }) => theme.color.darkBlue};

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    padding-top: ${({ theme }) => theme.pxToRem(48)};
    padding-bottom: ${({ theme }) => theme.pxToRem(48)};
  }
`;

export const Container = styled.div`
  ${containerMixin}
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    display: grid;
    align-items: flex-start;
    grid-template-areas:
      "logo navigation button"
      "socials navigation copyright";
    grid-template-columns: auto 1fr auto;
    gap: 0 ${({ theme }) => theme.pxToRem(131)};
  }
`;

export const Logo = styled(BaseLogo)`
  margin-bottom: ${({ theme }) => theme.pxToRem(32)};
  width: ${({ theme }) => theme.pxToRem(139)};
  height: ${({ theme }) => theme.pxToRem(20)};
  color: ${({ theme }) => theme.color.white};

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    margin-bottom: 0;
    grid-area: logo;
  }
`;

export const SocialNavigation = styled(BaseSocialNavigation)`
  margin-bottom: ${({ theme }) => theme.pxToRem(32)};

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    margin-bottom: 0;
    align-self: flex-end;
    grid-area: socials;
  }
`;

export const Navigation = styled(FooterNavigation)`
  margin-bottom: ${({ theme }) => theme.pxToRem(32)};

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    margin-bottom: 0;
    justify-self: flex-start;
    grid-area: navigation;
  }
`;

export const Button = styled(BaseButton)`
  margin-bottom: ${({ theme }) => theme.pxToRem(24)};

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    margin-bottom: 0;
    justify-self: flex-end;
    grid-area: button;
  }
`;

export const Copyright = styled.p`
  ${bodyMixin}
  color: ${({ theme }) => theme.color.grayishBlue};

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    align-self: flex-end;
    grid-area: copyright;
  }
`;
