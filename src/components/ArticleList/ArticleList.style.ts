import {
  containerMixin,
  gridMixin,
  headingMixin,
} from "@styles/styled-components.mixins";
import styled from "styled-components";

export const ArticleList = styled.section`
  ${containerMixin}
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${({ theme }) => theme.pxToRem(88)};
  padding-bottom: ${({ theme }) => theme.pxToRem(88)};
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    align-items: flex-start;
    text-align: left;
  }
`;

export const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.pxToRem(32)};
  ${headingMixin}
`;

export const List = styled.ul`
  ${gridMixin}
`;
