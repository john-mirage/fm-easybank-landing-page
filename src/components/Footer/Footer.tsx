import * as Styled from "./Footer.style";

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.Container>
        <Styled.Logo />
        <Styled.SocialNavigation />
        <Styled.Navigation />
        <Styled.Button type="button">Request Invite</Styled.Button>
        <Styled.Copyright>© Easybank. All Rights Reserved</Styled.Copyright>
      </Styled.Container>
    </Styled.Footer>
  );
};

export default Footer;
