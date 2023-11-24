import styled, { css } from "styled-components";

const BotaoPrincipal = styled.button`
  display: inline-block;
  border-radius: 24px;
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
  line-height: 1.125rem;
  background-color: ${({ theme }) => theme.COLORS.AZUL_MEDIO};
  color: ${({ theme }) => theme.COLORS.BRANCO};
  border: 3px solid ${({ theme }) => theme.COLORS.AZUL_MEDIO};
  cursor: pointer;
  transition: 0.2s;

  ${(props) =>
    props.lg &&
    css`
      padding: 1.5rem 2.75rem;
      font-size: 1.5rem;
      line-height: 1.125rem;
    `}

  &:hover {
    border: 3px solid ${({ theme }) => theme.COLORS.AZUL_ESCURO};
  }
`;

export default BotaoPrincipal;