import {
  bodyMixin,
  containerMixin,
  titleMixin,
} from "@styles/styled-components.mixins";
import styled from "styled-components";
import BaseFeature from "@components/Feature";

export const FeatureList = styled.section`
  padding-top: ${({ theme }) => theme.pxToRem(64)};
  padding-bottom: ${({ theme }) => theme.pxToRem(64)};
  background-color: ${({ theme }) => theme.color.lightGrayishBlue};
`;

export const Container = styled.div`
  ${containerMixin}
  text-align: center;
`;

export const Title = styled.h2`
  ${titleMixin}
  margin-bottom: ${({ theme }) => theme.pxToRem(14)};
`;

export const Subtitle = styled.p`
  ${bodyMixin}
  margin-bottom: ${({ theme }) => theme.pxToRem(56)};
`;

export const List = styled.ul``;

export const Feature = styled(BaseFeature)`
  margin-bottom: ${({ theme }) => theme.pxToRem(32)};

  &:last-child {
    margin-bottom: 0;
  }
`;
