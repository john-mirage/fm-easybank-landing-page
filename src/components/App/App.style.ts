import styled from "styled-components";

export const Container = styled.div`
  padding-top: ${({ theme }) => theme.pxToRem(64)};

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    padding-top: ${({ theme }) => theme.pxToRem(80)};
  }
`;
