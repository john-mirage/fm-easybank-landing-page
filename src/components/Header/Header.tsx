import * as Styled from "./Header.style";

const Header = () => {
  return (
    <Styled.Header>
      <Styled.Container>
        <Styled.Logo />
        <Styled.Button>
          <Styled.Icon />
        </Styled.Button>
      </Styled.Container>
    </Styled.Header>
  );
};

export default Header;
