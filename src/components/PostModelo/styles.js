import styled from "styled-components";

export const PostModeloContainer = styled.div`
  color: ${({ theme }) => theme.COLORS.FONTE_POST};
  position: relative;
`;

export const FotoCapa = styled.div`
  width: 100%;
  height: 204px;

  @media (max-width: 744px) {
    height: 104px;
  }

  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.3;
  position: absolute;
  top: 0;
  z-index: -1;

  ${(props) =>
    props.backgroundImage && `background-image: url(${props.backgroundImage});`}
`;

export const Titulo = styled.h2`
  font-family: "Playfair Display", sans-serif;
  padding: 0 7.5rem;
  font-size: 4rem;
  display: flex;
  align-items: center;

  @media (max-width: 744px) {
    padding: 0 1rem;
    font-size: 2rem;
    height: 104px;
  }
`;


export const PostConteudoContainer = styled.div`
  padding: 2.5rem 7.5rem 4.5rem;

  @media (max-width: 744px) {
    padding: 2rem 1.5rem 1.5rem;
  }
`;
