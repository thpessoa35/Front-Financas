import styled from "styled-components";

export const ContainerEntrada = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 16vw;
  height: 33vh;
  background: #8f8fb3;

  margin-left: 45px;
  margin-top: 72px;
  border-radius: 20px;
  padding: 20px;
  overflow: hidden;

  label {
    font-size: 32px;
    margin-top: 10px;
    margin-left: -5px;
    left: 5px;
    
    padding: 0;
  }

  input {
    width: 8vw;
    height: 3vh;
    margin-left: 40%;
    margin-top: -13%;
    border: none;
    border-radius: 10px;
    padding: 13px;
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
    margin-left: 40%;
    margin-top: -13%;
    border: none;
    border-radius: 10px;
    padding: 10px;
    padding-top: 1%;
    padding-left: 42px;
    outline: none;
    background-color: #f0f0f0;
    color: #333;
    font-size: 16px;
    appearance: none;
    overflow: hidden;
  }

  .button-Inserir {
    width: 100%; 
    margin-top: auto;
    height: 17%; 
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
  .input-modulo{
    position: relative;
    top: -20px;
    margin-top: -20px;
    transition: background-color 0.10s ease;
  }
  .moduleopcao{
     width: 8vw;
    height: 3vh;
    margin-left: 40%;
    margin-top: -13%;
    border: none;
    border-radius: 10px;
    padding: 10px;
    padding-top: 1%;
    padding-left: 10px;
    outline: none;
    background-color: #f0f0f0;
    color: #333;
    font-size: 16px;
    appearance: none;
    overflow: hidden;
  }
`;