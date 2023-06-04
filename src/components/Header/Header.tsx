import HeaderNavigation from "@components/HeaderNavigation";
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
          <Styled.Logo />
        </Styled.LeftSection>
        <Styled.MiddleSection>
          {navIsOpen && <HeaderNavigation />}
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
