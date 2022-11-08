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
`;

export const Container = styled.div`
  ${containerMixin}
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled(BaseLogo)`
  margin-bottom: ${({ theme }) => theme.pxToRem(32)};
  width: ${({ theme }) => theme.pxToRem(139)};
  height: ${({ theme }) => theme.pxToRem(20)};
  color: ${({ theme }) => theme.color.white};
`;

export const SocialNavigation = styled(BaseSocialNavigation)`
  margin-bottom: ${({ theme }) => theme.pxToRem(32)};
`;

export const Navigation = styled(FooterNavigation)`
  margin-bottom: ${({ theme }) => theme.pxToRem(32)};
`;

export const Button = styled(BaseButton)`
  margin-bottom: ${({ theme }) => theme.pxToRem(24)};
`;

export const Copyright = styled.p`
  ${bodyMixin}
`;
