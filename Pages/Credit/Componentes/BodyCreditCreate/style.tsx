import styled from "styled-components";

export const ContainerEntrada = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 15vw;
  height: 25vh;
  background: #8f8fb3;
  margin-left: 60px;
  margin-top: 72px;
  border-radius: 20px;
  padding: 20px;
  overflow: hidden;

  label {
    font-size: 32px;
    margin-top: 10px;
    
  }

  input {
    width: 8vw;
    height: 3vh;
    margin-left: 35%;
    margin-top: -13%;
    border: none;
    border-radius: 10px;
    padding: 10px;
    overflow: hidden;
    appearance: none;
    outline: none;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
  select {
    width: 8vw;
    height: 3vh;
    margin-left: 35%;
    margin-top: -13%;
    border: none;
    border-radius: 10px;
    padding: 10px;
    padding-top: 2%;
    padding-left: 50px;
    outline: none;
    background-color: #f0f0f0;
    color: #333;
    font-size: 16px;
    appearance: none;
    overflow: hidden;
  }

  .button-Inserir {
    width: 100%; /* O botão ocupa todo o espaço horizontal disponível */
    margin-top: auto;
    height: 18%; /* O botão fica na parte inferior */
    border-radius: 50px;
    color: black;
    outline: none;
    cursor: pointer;
    font-weight: 600;
    font-size: 1em;
    background: #dedcdf;
    border: 2px solid #000000;
    transition: background-color 0.5s ease;
    &:hover {
      background-color: #691b96;
    }
  }
`;