import styled from "styled-components";
import IconButton from "@components/IconButton";
import { Logo as BaseLogo } from "@components/Icon";
import { containerMixin } from "@styles/styled-components.mixins";
import { IconHamburger } from "@components/Icon";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ theme }) => theme.pxToRem(64)};
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

export const Container = styled.div`
  ${containerMixin}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const Logo = styled(BaseLogo)`
  width: ${({ theme }) => theme.pxToRem(139)};
  height: ${({ theme }) => theme.pxToRem(20)};
`;

export const Button = styled(IconButton)`
  margin-right: ${({ theme }) => theme.pxToRem(-12)};
`;

export const Icon = styled(IconHamburger)`
  width: ${({ theme }) => theme.pxToRem(24)};
  height: ${({ theme }) => theme.pxToRem(24)};
`;
