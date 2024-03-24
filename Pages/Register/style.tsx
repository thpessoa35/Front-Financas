// style.tsx
import { styled } from "styled-components";
const img = require('../../img/img.jpg');
const Container1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  background: url(${img}) no-repeat;
  transform: translate(-50%, -50%);
  background-color: #000000;
  width: 60vw;
  height: 65vh;
  border-radius: 30px;
  background: transparent;
  border: 3px solid rgb(156, 146, 146);
  backdrop-filter: blur(150px);

  .animate__animated.animate__fadeInLeftBig {
    animation-name: fadeInLeftBig;
    animation-duration: 1s;
    position: relative;
    width: 900px;
    height: 500px;
    font-size: 3em;
    
  }



  @media screen and (max-width: 950px) {
    width: 85%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 25px;
  border: 3px solid black;
  background: transparent;
  backdrop-filter: blur(30px);
  top: 20%;
  left: 20%;
  left: calc(50% + 20%); 
  transform: translate(-30%);
 

  Input:focus ~ label,
  Input:not(:placeholder-shown) ~ label {
    top: -5px;
  }

  @media screen and (max-width: 700px) {
    width: 35%;
    left: calc(50% + 5%);
  }
  .P-Register{
  color: #ffffff;
  position: fixed;
  display: flex;
  top: 350px;
  
}
a {
  margin-left: 5px;
  color: #ffffff;
  text-decoration: none;
}

`;

const Form = styled.form``;

const InputBox = styled.div`


  position: relative;
  width: 310px;
  margin: 30px 0;
  border-bottom: black 2px solid;
  background: transparent;

  label {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    font-size: 1em;
    pointer-events: none;
    color: #ffffff;
    transition: 0.5s;
  }
  h2 {
     margin-left: 70px;
     padding: 0px;
     position: absolute;
     margin-top: -80px;
     font-size: 3em;
  }
  span {
    position: absolute;
    left: 165px;
    color: #ffffff;
    top: -15px;
    font-size: 1em;
  }
`;

export { Container1, Container, Form, InputBox };
