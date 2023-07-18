import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.BACGROUND_800};
`;

export const Content = styled.div`
  background: blue;
  display: flex;
  justify-content: space-between;
`;

export const NewFilm = styled.button`
  background-color: ${({ theme }) => theme.COLORS.PINK};
  border: none;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;

  > svg {
    margin-left: 8px;
  }
`;
