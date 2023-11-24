import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import AppRoutes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Menu from "./components/Menu";
import Rodape from "./components/Rodape";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <GlobalStyles />
        <ScrollToTop />
        <Menu />
        <AppRoutes />
        <Rodape />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
