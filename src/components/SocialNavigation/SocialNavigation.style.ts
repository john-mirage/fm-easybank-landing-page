import {
  IconInstagram,
  IconFacebook,
  IconPinterest,
  IconTwitter,
  IconYoutube,
} from "@components/Icon";
import styled, { css } from "styled-components";

const iconMixin = css`
  width: ${({ theme }) => theme.pxToRem(24)};
  height: ${({ theme }) => theme.pxToRem(24)};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin: ${({ theme }) => theme.pxToRem(-8)};
`;

export const ListItem = styled.li`
  margin: ${({ theme }) => theme.pxToRem(8)};
`;

export const FacebookIcon = styled(IconFacebook)`
  ${iconMixin}
`;

export const YoutubeIcon = styled(IconYoutube)`
  ${iconMixin}
`;

export const TwitterIcon = styled(IconTwitter)`
  ${iconMixin}
`;

export const PinterestIcon = styled(IconPinterest)`
  ${iconMixin}
`;

export const InstagramIcon = styled(IconInstagram)`
  ${iconMixin}
`;