import * as Styled from "./HeaderNavigation.style";

const HeaderNavigation = () => {
  return (
    <Styled.Container>
      <Styled.Overlay />
      <Styled.Navigation>
        <Styled.Link href="">Home</Styled.Link>
        <Styled.Link href="">Contact</Styled.Link>
        <Styled.Link href="">About</Styled.Link>
        <Styled.Link href="">Blog</Styled.Link>
        <Styled.Link href="">Careers</Styled.Link>
      </Styled.Navigation>
    </Styled.Container>
  );
};

export default HeaderNavigation;
