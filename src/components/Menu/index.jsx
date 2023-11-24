import { Navegacao, Link } from "./styles";

const Menu = () => {
    return (
        <header>
            <Navegacao>
                <Link to="/">Inicio</Link>
                <Link to="/sobremim">Sobre Mim</Link>
            </Navegacao>
        </header>
    )
}

export default Menu;