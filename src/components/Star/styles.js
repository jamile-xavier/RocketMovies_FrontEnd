import styled from "styled-components";

export const Container = styled.div`
  background: none;
  color: ${({ theme }) => theme.COLORS.PINK};

  > svg {
    font-size: 30px;
    padding-right: 10px;
  }
`;
