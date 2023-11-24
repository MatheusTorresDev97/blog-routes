import { Route, Routes } from "react-router-dom";
import PaginaPadrao from "../components/PaginaPadrao"
import Inicio from "../pages/Inicio";
import Post from "../pages/Post";
import SobreMim from "../pages/SobreMim";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PaginaPadrao />}>
        <Route index element={<Inicio />} />
        <Route path="sobremim" element={<SobreMim />} />
        <Route path="posts/:id" element={<Post />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes