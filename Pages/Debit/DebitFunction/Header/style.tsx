import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: end;
  align-items: center;
  position: absolute;
  top: 0; 
  left: 0;
  width: 100%;
  height: 15%;
  padding: 4rem;
 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  z-index: 1000;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: #19191b;
 

  .Perfil-Handle {
    position: relative;
    font-size: 25px;
    left: 75%;
    height: auto; 
    color: #ffffff;
    transition-delay: 0.5ms;
    cursor: pointer; 
  }

  &:hover .menu {
    display: flex;
  }



  .menu {
    background: rgba(113, 85, 136, 0.5);
    width: 20vh;
    height: 15vw;
    position: absolute;
    left: -50px;
    padding-left: 30px;
    padding-top: 10px;
    margin-bottom: 20px;
    padding-bottom: 50px;
    border-radius: 15px;
    backdrop-filter: blur(88888px);  
    border: 3px solid rgb(15, 15, 15);
    transition: background-color 0.7s ease;
     
    button {
      position: absolute;
      width: 10vh;
      height: 2vw;
      top: 80%;
      left: 25%;
      border-radius: 50px;
      color: #000000;
      outline: none;
      cursor: pointer;
      background: #ffffff;
      border: 2px solid #000000;
      transition: background-color 0.5s ease;
      &:hover {
        background-color: #948e97; 
      } 
    }   
  }

  h1{
    position: absolute;
    left: 43%;
    height: auto; 
    transition-delay: 0.5ms;
    color: #ffffff;
  }

  .Debit{
    position: relative;
    font-size: 25px;
    left: -1490px;
    height: auto; 
    color: #ffffff;
    cursor: pointer; 
    transition-delay: 0.5ms;
  }
  .credit{
    position: relative;
    font-size: 25px;
    left: -1300px;
    height: auto; 
    transition-delay: 0.5ms;
    cursor: pointer; 
    color: #ffffff;
    transition: background-color 0.3s ease;
  } 
 
  .funções{
    position: relative;
    font-size: 25px;
    left: -1200px;
    height: auto; 
    transition-delay: 0.5ms;
    cursor: pointer; 
    color: #ffffff;
    transition: background-color 0.3s ease;
  }
  

`;
