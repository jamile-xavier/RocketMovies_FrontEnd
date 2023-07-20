import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.BACGROUND_800};
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 64px;
  overflow-y: scroll;
`;

export const NewFilm = styled.button`
  width: 207px;
  height: 48px;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  margin-bottom: 15px;

  > svg {
    margin-left: 8px;
  }
`;
