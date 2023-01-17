import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  width: 34rem;
  height: 20rem;
  margin: 0 auto;

  border: 2px solid #dcdcdc;
  border-radius: 5px;

  .divInfo {
    background-color: white;
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    h2 {
      display: flex;
      justify-content: center;
      padding-top: 38px;

      font-family: "Source Sans Pro", sans-serif;
      font-size: 24px;
      line-height: 28px;
      color: #656565;
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

    .h3RCivrão {
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

  label {
    padding-top: 12px;
    padding-bottom: 2px;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 14px;
    line-height: 16px;
    color: #656565;
  }

  p {
    padding-top: 3px;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 11px;
    line-height: 13px;

    color: #cecece;
  }

  .pError {
    padding-top: 3px;
    font-family: "Roboto", sans-serif;
    font-size: 9px;
    color: red;
  }

  button {
    margin-top: 10px;
    background-color: transparent;
    border: transparent;
  }
`;
