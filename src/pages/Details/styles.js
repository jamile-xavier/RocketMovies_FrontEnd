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
    overflow-y: scroll;
    padding: 64px 0;
  }
`;

export const Content = styled.div`
  max-width: 1113px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: start;
  }

  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 24px;
  }

  > p {
    font-size: 16px;
    margin-top: 40px;
    text-align: justify;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    align-items: center;
    gap: 5px;
  }

  > .ranking {
    display: flex;
    align-items: center;
    gap: 19px;
    margin-top: 24px;
  }

  > .created__by {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 24px 0 48px;

    img {
      width: 16px;
      height: 16px;
      border-radius: 35px;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  > .marcadores {
    margin-top: 48px;
  }
`;
