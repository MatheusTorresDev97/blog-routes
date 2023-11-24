import styled from "styled-components";

export const PostContainer = styled.div`
  text-align: center;
  width: 282px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
  border-radius: 0px 0px 10px 10px;
  padding-bottom: 1.5rem;
  transition: transform 0.2s;

  &:hover {
    transform: translate(0, -1rem);
  }

  @media (max-width: 1100px) {
    width: 336px;
  }
`;

export const Capa = styled.img`
  width: 100%;
`;

export const Titulo = styled.h2`
  font-family: "Playfair Display", sans-serif;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.COLORS.AZUL_ESCURO};
  line-height: 1.75rem;
  margin: 1.5rem 0 1.75rem;

  @media (max-width: 1100px) {
    font-weight: 600;
  }
`;
