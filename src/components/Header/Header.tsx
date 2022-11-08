import * as Styled from "./Header.style";

const Header = () => {
  return (
    <Styled.Header>
      <Styled.Title>Easybank homepage</Styled.Title>
      <Styled.Container>
        <Styled.Logo />
        <Styled.IconButton type="button" label="open main navigation">
          <Styled.Icon />
        </Styled.IconButton>
      </Styled.Container>
    </Styled.Header>
  );
};

export default Header;
