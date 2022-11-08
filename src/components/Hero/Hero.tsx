import Button from "@components/Button";
import * as Styled from "./Hero.style";

const App = () => {
  return (
    <Styled.Hero>
      <Styled.Image />
      <Styled.Container>
        <Styled.Title>Next generation digital banking</Styled.Title>
        <Styled.Subtitle>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </Styled.Subtitle>
        <Button type="button">Request Invite</Button>
      </Styled.Container>
    </Styled.Hero>
  );
};

export default App;
