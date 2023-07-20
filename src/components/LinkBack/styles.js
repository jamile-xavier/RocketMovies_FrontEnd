import styled from "styled-components";

export const Container = styled.div`
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
