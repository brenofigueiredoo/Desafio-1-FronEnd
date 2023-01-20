import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;

  background: rgba(209, 220, 227, 0.18);
  border-radius: 4px;

  @media screen and (max-width: 440px) {
    width: 100%;
    height: 100%;
  }

  h2 {
    width: 100%;
    border-bottom: 1px solid #1e90ff;
    color: #1e90ff;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-weight: 600;
    font-size: 14px;
  }

  h3 {
    display: flex;
    color: #1e90ff;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
  }

  strong {
    color: #1e90ff;
    font-weight: 600;
    font-family: "Roboto", sans-serif;
  }

  .divResponse {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
`;
