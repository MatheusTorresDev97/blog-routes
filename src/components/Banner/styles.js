import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.AZUL_PRINCIPAL};
  color: ${({ theme }) => theme.COLORS.BRANCO};

  padding: 3rem 7.5rem 6.25rem;

  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1100px) {
    padding: 3.5rem 1.5rem;
  }

  @media (max-width: 744px) {
  }
`;

export const Titulo = styled.h1`
  font-family: "Playfair Display", sans-serif;
  font-size: 4rem;

  margin: 4.875rem 0 2rem;

  @media (max-width: 1100px) {
    margin-top: 0;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 744px) {
    padding: 2rem 1rem;
    display: block;
  }
`;

export const Paragrafo = styled.p`
  font-family: "Playfair Display", sans-serif;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 1100px) {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 744px) {
    margin-bottom: 2rem;
  }
`;

export const ContainerImagem = styled.div`
  position: relative;
  height: 406px;

  @media (max-width: 1100px) {
    height: 338px;
  }

  @media (max-width: 744px) {
    height: 307px;
  }
`;

export const ImagemCirculo = styled.img`
  position: absolute;
  right: 7vw;
  bottom: 2.2vw;
  width: 25vw;

  @media (max-width: 1100px) {
    width: 25vw;
  }

  @media (max-width: 744px) {
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 240px;
    transform: translate(-1.5rem, 0px);
  }
`;

export const ImagemMinhaFoto = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 18vw;
  border-radius: 50%;

  @media (max-width: 1100px) {
    right: 10vw;
    width: 35vw;
  }

  @media (max-width: 744px) {
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 170px;
    transform: translate(5rem, 0px);
  }
`;
