import styled from "styled-components";

export const App = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-left: ${(props) => props.theme.pxToRem(48)};
  padding-right: ${(props) => props.theme.pxToRem(48)};
  text-align: center;
`;

export const Title = styled.h1`
  max-width: ${(props) => props.theme.pxToRem(540)};
  font-size: ${(props) => props.theme.pxToRem(64)};
  font-weight: 600;
  line-height: ${(props) => props.theme.pxToRem(72)};
  color: #fff;

  & > span {
    color: #cc5de8;
  }
`;
