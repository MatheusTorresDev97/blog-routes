import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import AppRoutes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Rodape from "./components/Rodape";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
        <Rodape />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
