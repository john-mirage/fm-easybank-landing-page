import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 64px;
  left: 0;
  width: 100%;
  height: calc(100% - 64px);
  padding: 24px;

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    top: 80px;
    height: calc(100% - 80px);
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
`;

export const Link = styled.a`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: -0.14px;
  color: ${({ theme }) => theme.color.darkBlue};
`;
