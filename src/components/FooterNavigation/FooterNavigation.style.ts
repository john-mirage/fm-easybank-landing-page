import { bodyMixin } from "@styles/styled-components.mixins";
import styled from "styled-components";

export const Navigation = styled.nav``;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListItem = styled.li`
  margin-bottom: ${({ theme }) => theme.pxToRem(8)};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Link = styled.a`
  ${bodyMixin}
  color: ${({ theme }) => theme.color.white};
`;
