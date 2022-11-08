import styled from "styled-components";
import { Container as ContainerMixin } from "@styles/styled-components.mixins";

export const Hero = styled.div``;

export const Image = styled.div`
  height: ${({ theme }) => theme.pxToRem(282)};
`;

export const Container = styled.div`
  text-align: center;
  padding-bottom: ${({ theme }) => theme.pxToRem(88)};
  ${ContainerMixin}
`;

export const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.pxToRem(16)};
  font-size: ${({ theme }) => theme.pxToRem(40)};
  font-weight: 300;
  line-height: ${({ theme }) => theme.pxToRem(47)};
  letter-spacing: ${({ theme }) => theme.pxToRem(-0.71)};
  color: ${({ theme }) => theme.color.darkBlue};
`;

export const Subtitle = styled.p`
  margin-bottom: ${({ theme }) => theme.pxToRem(32)};
  font-size: ${({ theme }) => theme.pxToRem(15)};
  font-weight: 400;
  line-height: ${({ theme }) => theme.pxToRem(25)};
  letter-spacing: ${({ theme }) => theme.pxToRem(-0.23)};
  color: ${({ theme }) => theme.color.grayishBlue};
`;
