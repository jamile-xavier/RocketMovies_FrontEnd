import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #3e3b47;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 80px;
`;

export const Logo = styled.text`
  width: 164px;
  height: 32px;

  > strong {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Search = styled.input`
  width: 630px;
  height: 56px;
  padding: 19px 24px;
  border: none;
  border-radius: 10px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
