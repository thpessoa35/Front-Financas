import { useState } from 'react';
import { Container1, Container2, ContainerExpandir } from './style';

import ContainerEntradaDebit from './Componentes/BodyCreditCreate/CreateTransaction';
import ContainerSaidaDebit from './Componentes/BodyCreditGet/BodyGet';
import { HeaderComponent } from './Componentes/Header/Header';
import ContainerSaidaCredit from './Componentes/BodyCreditGet/BodyGet';
const img = require("../../img/Investment data-amico (1).png")

const Credit = () => {
 
 
  const [totalSaida, setTotalSaida] = useState<number>(0);
  

  return (
    <>
      <Container1>
        <HeaderComponent />
        <Container2>
          <h1 className='h1-container2'>CREDITO</h1>
          <img src={img} alt=""  className='img'/>
          <ContainerEntradaDebit />
          <ContainerSaidaCredit setTotalSaida={setTotalSaida} />
          <ContainerExpandir>
         
            <h1 className="h1-Saida">Saídas: R$ {totalSaida.toFixed(2)}</h1>
            
          </ContainerExpandir>
        </Container2>
      </Container1>
    </>
  );
};

export default Credit;
