import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  width: 34rem;
  height: 24rem;
  margin: 0 auto;

  border: 2px solid #dcdcdc;
  border-radius: 5px;

  @media screen and (max-width: 440px) {
    flex-direction: column;
    height: 36rem;
    align-items: center;
    justify-content: center;
  }

  .divInfo {
    background-color: white;
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (max-width: 440px) {
      width: 100%;
      height: 100%;
    }

    h2 {
      display: flex;
      justify-content: center;
      padding-top: 38px;

      font-family: "Source Sans Pro", sans-serif;
      font-size: 24px;
      line-height: 28px;
      color: #656565;

      @media screen and (max-width: 240px) {
        font-size: 20px;
      }
    }
  }

  .divInputs {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 14px;
  }

  .containterResponseFull {
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
      width: 90%;
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
  }

  .divResponse {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
`;

export const BackBody = styled.div`
  display: flex;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background: rgba(209, 220, 227, 0.18);
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;

  input {
    width: 200px;
    height: 24px;

    border-radius: 5px;
    background-color: white;
    border: 2px solid #c0c0c0;
    :hover {
      border: 2px solid #1e90ff;
    }
  }

  .pMaxInfo {
    padding-top: 3px;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 11px;
    line-height: 13px;

    color: #cecece;
  }

  button {
    width: 0;
    height: 0;
    margin-top: 10px;
    background-color: transparent;
    border: transparent;
  }
`;
