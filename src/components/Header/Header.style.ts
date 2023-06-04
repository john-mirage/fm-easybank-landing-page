import styled, { css } from "styled-components";
import BaseIconButton from "@components/IconButton";
import { Logo as BaseLogo, IconClose } from "@components/Icon";
import {
  containerMixin,
  screenReaderOnlyMixin,
} from "@styles/styled-components.mixins";
import { IconHamburger } from "@components/Icon";
import BaseButton from "@components/Button";
import Navigation from "@components/HeaderNavigation";

interface NavigationProps {
  navIsOpen: boolean;
}

export const Header = styled.header`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ theme }) => theme.pxToRem(64)};
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    height: ${({ theme }) => theme.pxToRem(80)};
  }
`;

export const Title = styled.h1`
  ${screenReaderOnlyMixin}
`;

export const Container = styled.div`
  ${containerMixin}
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

const Section = css`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LeftSection = styled.div`
  ${Section}
  justify-content: flex-start;
`;

export const MiddleSection = styled.div`
  ${Section}
  justify-content: center;
`;

export const RightSection = styled.div`
  ${Section}
  justify-content: flex-end;
`;

export const HeaderNavigation = styled(Navigation)<NavigationProps>`
  visibility: ${({ navIsOpen }) => (navIsOpen ? "visible" : "hidden")};
  opacity: ${({ navIsOpen }) => (navIsOpen ? "1" : "0")};

  @media screen and (prefers-reduced-motion: no-preference) {
    transition-property: visibility, opacity;
    transition-duration: 150ms;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    visibility: visible;
    opacity: 1;
  }
`;

export const Logo = styled(BaseLogo)`
  width: ${({ theme }) => theme.pxToRem(139)};
  height: ${({ theme }) => theme.pxToRem(20)};
  color: ${({ theme }) => theme.color.darkBlue};
`;

export const IconButton = styled(BaseIconButton)`
  margin-right: ${({ theme }) => theme.pxToRem(-12)};

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    display: none;
  }
`;

export const HamburgerIcon = styled(IconHamburger)`
  width: ${({ theme }) => theme.pxToRem(24)};
  height: ${({ theme }) => theme.pxToRem(24)};
`;

export const CloseIcon = styled(IconClose)`
  width: ${({ theme }) => theme.pxToRem(24)};
  height: ${({ theme }) => theme.pxToRem(24)};
`;

export const Button = styled(BaseButton)`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    display: block;
  }
`;
