import React, { useEffect, useState } from 'react';
import { Container1, Container2, ContainerExpandir } from './style';
import ContainerEntradaDebit from './Componentes/BodyDebitCreate/ContainerEntrada';
import ContainerSaidaDebit from './Componentes/BodyDebitGet/ContainerSaida';
import HeaderComponent from './Componentes/Header/Header';


const img = require("../../img/Investment data-amico (1).png")

const Debit = () => {
  const [totalEntrada, setTotalEntrada] = useState<number>(0);
  const [totalSaida, setTotalSaida] = useState<number>(0);
 

 
 

  const total = totalEntrada + totalSaida;

  return (
    <>
      <Container1>
        <HeaderComponent
         
        />
       
        <Container2>
          <h1 className='h1-container2'>DEBITO</h1>
          <img src={img} alt="" className='img' />
          <ContainerEntradaDebit />
          <ContainerSaidaDebit setTotalEntrada={setTotalEntrada} setTotalSaida={setTotalSaida} />
          <ContainerExpandir>
            <h1 className="h1-Entrada">Entradas: R$ {totalEntrada.toFixed(2)}</h1>
            <h1 className="h1-Saida">Saídas: R$ {totalSaida.toFixed(2)}</h1>
            <h1 className="h1-total">Total: R$ {total.toFixed(2)}</h1>
          </ContainerExpandir>
        </Container2>
      </Container1>
    </>
  );
};

export default Debit;
