import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.AZUL_ESCURO};
    color: ${({ theme }) => theme.BRANCO};

    padding: 3rem 7.5rem 6.25rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const Titulo = styled.h1`
    font-family: 'Playfair Display', sans-serif;
    font-size: 4rem;

    margin: 4.875rem 0 2rem
`

export const Paragrafo = styled.p`
    font-family: 'Playfair Display', sans-serif;
    font-size: 1.5rem;
    line-height: 2rem;
    margin-bottom: 2rem;
`

export const ContainerImagem = styled.div`
    position: relative;
    height: 406px;
`

export const ImagemCirculo = styled.img`
position: absolute;
    right: 7vw;
    bottom: 2.2vw;
    width: 25vw;
`;

export const ImagemMinhaFoto = styled.img`
position: absolute;
    right: 0;
    bottom: 0;
    width: 18vw;
    border-radius: 50%;
`;
