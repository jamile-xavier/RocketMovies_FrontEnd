import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  border: none;
  font-size: 16px;

  display: flex;
  align-items: center;
  gap: 5px;

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;
