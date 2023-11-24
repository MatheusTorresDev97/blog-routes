import {
  Container,
  Titulo,
  Paragrafo,
  ContainerImagem,
  ImagemCirculo,
  ImagemMinhaFoto,
} from "./styles";

import circuloColorido from "../../assets/circulo_colorido.png";
import minhaFoto from "../../assets/minha-foto.jpg";

const Banner = () => {
  return (
    <Container>
      <div>
        <Titulo>Olá, Mundo!</Titulo>
        <Paragrafo>
          Bem vindos ao meu espaço pessoal! Eu sou o Matheus Torres!
          Desenvolvedor Web!
        </Paragrafo>
      </div>
      <ContainerImagem>
        <ImagemCirculo src={circuloColorido} alt="Circulo Colorido" />
        <ImagemMinhaFoto src={minhaFoto} alt="Minha Foto" />
      </ContainerImagem>
    </Container>
  );
};

export default Banner;
