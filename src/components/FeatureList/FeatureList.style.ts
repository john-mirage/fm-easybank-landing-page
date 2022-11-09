import {
  bodyMixin,
  containerMixin,
  gridMixin,
  headingMixin,
} from "@styles/styled-components.mixins";
import styled, { css } from "styled-components";
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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    align-items: flex-start;
    text-align: left;
  }
`;

export const Title = styled.h2`
  ${headingMixin}
  margin-bottom: ${({ theme }) => theme.pxToRem(14)};
`;

export const Subtitle = styled.p`
  ${bodyMixin}
  margin-bottom: ${({ theme }) => theme.pxToRem(56)};
  color: ${({ theme }) => theme.color.grayishBlue};

  @media screen and (min-width: ${({ theme }) => theme.screen.lg}) {
    max-width: ${({ theme }) => theme.pxToRem(635)};
    font-size: ${({ theme }) => theme.pxToRem(18)};
    line-height: ${({ theme }) => theme.pxToRem(28)};
    letter-spacing: ${({ theme }) => theme.pxToRem(-0.28)};
  }
`;

export const List = styled.ul`
  ${gridMixin}
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
