import * as Styled from "./Header.style";
import { useState } from "react";

const Header = () => {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);

  const onButtonClick = () => {
    setNavIsOpen(!navIsOpen);
  };

  return (
    <Styled.Header>
      <Styled.Title>Easybank homepage</Styled.Title>
      <Styled.Container>
        <Styled.LeftSection>
          <a href="#" aria-label="Go to the homepage of Easybank">
            <Styled.Logo />
          </a>
        </Styled.LeftSection>
        <Styled.MiddleSection>
          <Styled.HeaderNavigation
            navIsOpen={navIsOpen}
            onClick={onButtonClick}
          />
        </Styled.MiddleSection>
        <Styled.RightSection>
          <Styled.IconButton
            type="button"
            label="open main navigation"
            onClick={onButtonClick}
          >
            {navIsOpen ? <Styled.CloseIcon /> : <Styled.HamburgerIcon />}
          </Styled.IconButton>
          <Styled.Button type="button">Request Invite</Styled.Button>
        </Styled.RightSection>
      </Styled.Container>
    </Styled.Header>
  );
};

export default Header;
