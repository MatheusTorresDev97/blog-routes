import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import AppRoutes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Rodape from "./components/Rodape";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRoutes />
        <Rodape />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
