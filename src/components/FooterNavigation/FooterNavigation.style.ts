import { bodyMixin } from "@styles/styled-components.mixins";
import styled from "styled-components";

export const Navigation = styled.nav`
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    text-align: left;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: ${({ theme }) => theme.pxToRem(8)};

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => `${theme.pxToRem(8)}  ${theme.pxToRem(30)}`};
  }
`;

export const ListItem = styled.li`
  width: ${({ theme }) => theme.pxToRem(160)};
`;

export const Link = styled.a`
  ${bodyMixin}
  color: ${({ theme }) => theme.color.white};

  @media screen and (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.color.limeGreen};
    }
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    transition-property: color;
    transition-duration: 150ms;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    font-size: ${({ theme }) => theme.pxToRem(16)};
    line-height: ${({ theme }) => theme.pxToRem(26)};
    letter-spacing: ${({ theme }) => theme.pxToRem(-0.25)};
  }
`;
