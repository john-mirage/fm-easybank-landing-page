import Button from "@components/Button";
import * as Styled from "./Hero.style";
import mockup from "@images/image-mockups.png";

const Hero = () => {
  return (
    <Styled.Hero>
      <Styled.Pattern />
      <Styled.Mockup src={mockup} alt="" draggable="false" />
      <Styled.Container>
        <Styled.TextSection>
          <Styled.Title>Next generation digital banking</Styled.Title>
          <Styled.Subtitle>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </Styled.Subtitle>
          <Button type="button">Request Invite</Button>
        </Styled.TextSection>
      </Styled.Container>
    </Styled.Hero>
  );
};

export default Hero;
