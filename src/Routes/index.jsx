import { Route, Routes } from "react-router-dom";
import PaginaPadrao from "../components/PaginaPadrao"
// import Inicio from "../pages/Inicio";


const AppRoutes = () => {
    return (
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            {/* <Route index element={<Inicio />} /> */}
          </Route>
        </Routes>
      );
}

export default AppRoutes