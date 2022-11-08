import FeatureList from "@components/FeatureList";
import Header from "@components/Header";
import Hero from "@components/Hero";
import GlobalStyle from "@styles/styled-components.global";
import theme from "@styles/styled-components.theme";
import { ThemeProvider } from "styled-components";
import * as Styled from "./App.style";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Styled.Container>
          <Header />
          <Hero />
          <FeatureList />
        </Styled.Container>
      </ThemeProvider>
    </>
  );
};

export default App;
