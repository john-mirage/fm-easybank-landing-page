import { containerMixin, headingMixin } from "@styles/styled-components.mixins";
import styled from "styled-components";

export const ArticleList = styled.section`
  ${containerMixin}
  padding-top: ${({ theme }) => theme.pxToRem(88)};
  padding-bottom: ${({ theme }) => theme.pxToRem(88)};
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.pxToRem(32)};
  ${headingMixin}
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  margin-bottom: ${({ theme }) => theme.pxToRem(24)};

  &:last-child {
    margin-bottom: 0;
  }
`;
