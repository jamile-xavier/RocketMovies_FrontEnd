import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";
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
`;
