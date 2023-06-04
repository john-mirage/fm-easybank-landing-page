import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 64px;
  left: 0;
  width: 100%;
  height: calc(100% - 64px);
  padding: 24px;

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    position: static;
    padding: 0;
  }
`;

export const Overlay = styled.button`
  position: absolute;
  z-index: 200;
  inset: 0;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.color.darkBlue},
    hsla(231, 26%, 24%, 0%)
  );

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    display: none;
  }
`;

export const Navigation = styled.nav`
  position: relative;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 32px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.white};

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: center;
    height: 80px;
    padding: 0;
    background-color: transparent;
  }
`;

export const Link = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: -0.14px;
  color: ${({ theme }) => theme.color.darkBlue};

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    height: 100%;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.11px;
    color: ${({ theme }) => theme.color.grayishBlue};

    @media screen and (hover: hover) {
      &:hover {
        color: ${({ theme }) => theme.color.darkBlue};
      }
    }

    @media screen and (prefers-reduced-motion: no-preference) {
      transition-property: color;
      transition-duration: 150ms;
    }
  }
`;

export const LinkLine = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(
    to bottom right,
    ${({ theme }) => `${theme.color.limeGreen}, ${theme.color.brightCyan}`}
  );
  visibility: hidden;
  opacity: 0;
  transform: translateY(4px);

  @media screen and (hover: hover) {
    ${Link}:hover & {
      visibility: visible;
      opacity: 1;
    }
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    transition-property: visibility, opacity;
    transition-duration: 150ms;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    transform: none;
  }
`;
