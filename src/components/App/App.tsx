import GlobalStyle from "@styles/styled-components.global";
import theme from "@styles/styled-components.theme";
import { ThemeProvider } from "styled-components";
import * as Styled from "./App.style";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Styled.App>
          <Styled.Title>
            React with <span>Styled components</span>
          </Styled.Title>
        </Styled.App>
      </ThemeProvider>
    </>
  );
};

export default App;
