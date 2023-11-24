import { Footer } from "./styles";
import MarcaRegistrada from "../../assets/marca_registrada.svg";

const Rodape = () => {
  return (
    <Footer>
      <img src={MarcaRegistrada} alt="Marca Registrada" /> Desenvolvido por
      Matheus Torres.
    </Footer>
  );
};

export default Rodape;
