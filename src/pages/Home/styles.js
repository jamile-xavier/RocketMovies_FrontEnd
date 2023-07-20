import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 64px;
  overflow-y: scroll;
`;

export const NewFilm = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: 8px;
  padding: 12px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 190px;
  margin-bottom: 15px;

  > svg {
    margin-left: 8px;
  }
`;
