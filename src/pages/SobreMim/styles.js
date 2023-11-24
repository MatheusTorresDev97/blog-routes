import styled from "styled-components";

export const FotoSobreMim = styled.img`
  margin-bottom: 0.5rem;
  margin-left: 1.5rem;
  width: 40vw;
  float: right;

  @media (max-width: 1100px) {
    float: none;
    display: block;
    margin: 0 auto 2rem;
    width: 70vw;
  }

  @media (max-width: 744px) {
    width: 100%;
  }
`;

export const Subtitulo = styled.h2`
  margin-bottom: 2rem;
  font-size: 2.5rem;

  @media (max-width: 744px) {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-bottom: 1.5rem;
  }
`;

export const Paragrafo = styled.p`
  text-align: justify;
  font-size: 1.5rem;
  line-height: 2.25rem;
  margin-bottom: 1.5rem;

  @media (max-width: 744px) {
    font-size: 1rem;
    line-height: 1.75rem;
  }
`;
