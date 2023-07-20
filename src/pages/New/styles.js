import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    width: 1113px;
    height: 88px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 16px;
    gap: 24px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 8px;
  }
`;

export const Form = styled.form`
  max-width: 550px;
  margin: 38px auto;

  > header {
    margin: 36px 0;

    a {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > a {
    margin-top: 42px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > textarea {
    margin: 40px 0;
    width: 1113px;
  }
`;

export const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;

  input {
    width: 536px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  width: 1113px;
  justify-content: space-around;
  gap: 40px;

  > :nth-child(1) {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;
