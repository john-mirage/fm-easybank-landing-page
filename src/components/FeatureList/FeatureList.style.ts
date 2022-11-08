import {
  bodyMixin,
  containerMixin,
  titleMixin,
} from "@styles/styled-components.mixins";
import styled, { css } from "styled-components";
import BaseFeature from "@components/Feature";
import {
  IconOnline,
  IconBudgeting,
  IconOnboarding,
  IconApi,
} from "@components/Icon";

const iconMixin = css`
  margin-bottom: ${({ theme }) => theme.pxToRem(24)};
  width: ${({ theme }) => theme.pxToRem(72)};
  height: ${({ theme }) => theme.pxToRem(72)};
`;

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

export const OnlineIcon = styled(IconOnline)`
  ${iconMixin}
`;

export const BudgetingIcon = styled(IconBudgeting)`
  ${iconMixin}
`;

export const OnboardingIcon = styled(IconOnboarding)`
  ${iconMixin}
`;

export const ApiIcon = styled(IconApi)`
  ${iconMixin}
`;
