import { styled } from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 2px solid #000000; /* Adicione esta linha para adicionar uma borda preta de 2 pixels */
  margin-top: 20px;
  font-size: 1em;
  color: black;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  background-color: rgb(179, 174, 189);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5880ad; /* Substitua pelo sua cor ao passar o mouse */
  }

  &:active {
    background-color: your-active-color; /* Substitua pelo sua cor ao clicar */
  }
`;
