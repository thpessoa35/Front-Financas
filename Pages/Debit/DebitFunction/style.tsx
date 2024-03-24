import styled from "styled-components";

export const Container1 = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  height: 90vh;
  border-radius: 30px;
  background: linear-gradient(to bottom, #0076fd 0%, #8300ee 50%, #070707 100%);
  border: 3px solid rgb(255, 255, 255);
  overflow: hidden;
  .animate__animated.animate__fadeInLeftBig {
    animation-name: fadeInLeftBig;
    animation-duration: 1s;
    position: relative;
    width: 900px;
    height: 500px;
    font-size: 3em;
  }

  .button {
    width: 50px;
    height: 45px;
    position: absolute;
    top: 0px;
    left: 1230px;
    overflow: hidden;
  }

 
`;




export const Container2 = styled.div`
  position: relative;
  display: flex;
  width: 155vh;
  height: 50vh;
  background: #19191b;
  border-radius: 20px;
  overflow: hidden;

  .h1-container2{
    position: absolute;
    left: 45%;
    top: 10px;
    margin: 5px;
    color: aliceblue;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
  .img {
    position: absolute;
    height: 250px;
    left: 1160px;
    top: 230px;
    border-radius: 10px;
    padding: 0;
    margin: 0;
    animation: mover 15s infinite; 
}

@keyframes mover {
    0% { top: 500px; } 

}

`;

export const Container3 = styled.div`
 
  
  display: flex;
  width: 25vh;
  height: 50vh;
  left: 680px;
  background: #535394;
  border-radius: 20px;
  overflow: hidden;
`;


export const ContainerExpandir = styled.div`
 position: relative;
  display: flex;
  flex-direction: column;
  width: 18vw;
  height: 15vh;
  left: 55px;
  background: #8f8fb3;
  top: 15%;
  border-radius: 20px;
  padding: 20px;
  overflow: hidden;
`;
