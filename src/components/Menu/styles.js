import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navegacao = styled.nav`
  height: 112px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3rem;

  @media (max-width: 744px) {
    height: 72px;
  }
`;


export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.FONTE_PRINCIPAL};
  font-size: 1.25rem;
  line-height: 1.5rem;

  &.active {
    text-decoration: underline;
  }
`;