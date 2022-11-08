import styled from "styled-components";

export const Article = styled.article`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border-radius: ${({ theme }) => theme.pxToRem(5)};
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 79 / 50;
  object-fit: cover;
  object-position: center;
`;

export const Body = styled.div`
  padding: ${({ theme }) => `${theme.pxToRem(24)} ${theme.pxToRem(32)}`};
  text-align: left;
`;

export const Author = styled.p`
  margin-bottom: ${({ theme }) => theme.pxToRem(8)};
  font-size: ${({ theme }) => theme.pxToRem(10)};
  font-weight: 400;
  line-height: ${({ theme }) => theme.pxToRem(18)};
  letter-spacing: ${({ theme }) => theme.pxToRem(-0.16)};
  color: ${({ theme }) => theme.color.grayishBlue};
`;

export const Name = styled.h3`
  margin-bottom: ${({ theme }) => theme.pxToRem(8)};
  font-size: ${({ theme }) => theme.pxToRem(16)};
  font-weight: 300;
  line-height: ${({ theme }) => theme.pxToRem(20)};
  letter-spacing: ${({ theme }) => theme.pxToRem(-0.29)};
  color: ${({ theme }) => theme.color.darkBlue};
`;

export const Excerpt = styled.p`
  font-size: ${({ theme }) => theme.pxToRem(13)};
  font-weight: 400;
  line-height: ${({ theme }) => theme.pxToRem(18)};
  letter-spacing: ${({ theme }) => theme.pxToRem(-0.2)};
  color: ${({ theme }) => theme.color.grayishBlue};
`;
