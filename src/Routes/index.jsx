import { Route, Routes } from "react-router-dom";
import PaginaPadrao from "./components/PaginaPadrao";

const AppRoutes = () => {
    <Routes>
        <Route path="/" element={<PaginaPadrao />}> 
        </Route>
    </Routes>
}

export default AppRoutes