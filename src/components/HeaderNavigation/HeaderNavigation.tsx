import * as Styled from "./HeaderNavigation.style";

interface Props {
  className?: string;
  onClick: () => void;
}

const HeaderNavigation = ({ className, onClick }: Props) => {
  return (
    <Styled.Container className={className}>
      <Styled.Overlay onClick={onClick} />
      <Styled.Navigation>
        <Styled.Link href="#">
          Home
          <Styled.LinkLine />
        </Styled.Link>
        <Styled.Link href="#">
          Contact
          <Styled.LinkLine />
        </Styled.Link>
        <Styled.Link href="#">
          About
          <Styled.LinkLine />
        </Styled.Link>
        <Styled.Link href="#">
          Blog
          <Styled.LinkLine />
        </Styled.Link>
        <Styled.Link href="#">
          Careers
          <Styled.LinkLine />
        </Styled.Link>
      </Styled.Navigation>
    </Styled.Container>
  );
};

export default HeaderNavigation;
