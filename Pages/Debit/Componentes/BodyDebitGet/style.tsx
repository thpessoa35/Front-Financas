import styled from "styled-components";

export const ContainerSaida = styled.div`
  position: relative;
  display: flex;
  width: 32vw;
  height: 35vh;
  background: #8f8fb3;
  left: 2%;
  margin-top: 72px;
  padding-left: 5px;
  border-radius: 25px;
  overflow: hidden;
  @media screen and (max-width: 950px) {
    width: 85%;
  }


  input{
    
    position: relative;
    left: 28%;
    top: 1px;
    padding-left: -1px;
    border-bottom: 1px solid;
    margin-left: 10px;
    border-radius: 5px;
    border: none;
  }
  button{
     position: relative;
     padding: 0px;
     padding-top: 1px;
     padding-left: 10px;
     padding-bottom: 3px;
     padding-right: 10px;
     top: 1px;
    left: 30%;
    color: black;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    background: #dedcdf;
    border: none;
    transition: background-color 0.5s ease;
    &:hover {
      background-color: #691b96;
    }
  }
  select{
    position: relative;
    left: 28%;
    top: 2px;
    appearance: none;
    width: 80px;
    height: 18px;
    padding-top: 1px;
    padding-right: 2px;
    padding-left: 17px;
    border: none;
    outline: none;
    border-radius: 5px;
  }
`;

export const TableContainer = styled.div`
  overflow-y: scroll ;
  width: 100%;   
  padding: 10px;  
  max-height: calc(100% - 2px); 
  margin-left: 5px;


  h1{
    margin-top: -33px;
    position: relative;
    top: 29px;
    left: 0px;
  }
  .h1-total{
    position: fixed;
    left: 20px;
  }
`;


export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  
    
`;

export const TableHead = styled.thead`
  text-align: left;
  font-weight: bold;
 
`;

export const TableHeader = styled.th`
  padding: 15px 10px;
  border-bottom: 1px solid #ffffff;
 
`;

export const TableData = styled.td`
  padding:10px 10px;
  border-bottom: 1px solid #ffffff;
  
`;
