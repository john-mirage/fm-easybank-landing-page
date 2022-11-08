import { bodyMixin } from "@styles/styled-components.mixins";
import styled from "styled-components";

export const Feature = styled.li``;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled.div`
  margin-bottom: ${({ theme }) => theme.pxToRem(24)};
`;

export const Name = styled.h3`
  margin-bottom: ${({ theme }) => theme.pxToRem(16)};
  font-size: ${({ theme }) => theme.pxToRem(20)};
  font-weight: 300;
  line-height: ${({ theme }) => theme.pxToRem(28)};
  letter-spacing: ${({ theme }) => theme.pxToRem(-0.36)};
  color: ${({ theme }) => theme.color.darkBlue};
`;

export const Description = styled.p`
  ${bodyMixin}
`;
