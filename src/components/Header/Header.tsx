import * as Styled from "./Header.style";

const Header = () => {
  return (
    <Styled.Header>
      <Styled.Title>Easybank homepage</Styled.Title>
      <Styled.Container>
        <Styled.LeftSection>
          <Styled.Logo />
        </Styled.LeftSection>
        <Styled.MiddleSection></Styled.MiddleSection>
        <Styled.RightSection>
          <Styled.IconButton type="button" label="open main navigation">
            <Styled.Icon />
          </Styled.IconButton>
          <Styled.Button type="button">Request Invite</Styled.Button>
        </Styled.RightSection>
      </Styled.Container>
    </Styled.Header>
  );
};

export default Header;
