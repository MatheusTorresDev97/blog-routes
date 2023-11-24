import styled from "styled-components";

export const Footer = styled.footer`
    background-color: ${({theme}) => theme.AZUL_ESCURO};
    color: ${({theme}) => theme.BRANCO};
    padding: 2rem 0;

    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: .5rem;
`