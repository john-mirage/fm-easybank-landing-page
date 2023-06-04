import * as Styled from "./Footer.style";

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.Container>
        <a href="#" aria-label="Go to the homepage of Easybank">
          <Styled.Logo />
        </a>
        <Styled.SocialNavigation />
        <Styled.Navigation />
        <Styled.Button type="button">Request Invite</Styled.Button>
        <Styled.Copyright>© Easybank. All Rights Reserved</Styled.Copyright>
      </Styled.Container>
    </Styled.Footer>
  );
};

export default Footer;
