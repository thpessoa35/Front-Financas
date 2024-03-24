import React, { useEffect, useState } from "react";
import { ContainerSaida, TableContainer, Table, TableHead, TableHeader, TableData } from "./style";
import ServiceApiDebit from "../../../../Service/ServiceApiDebit";
import Data from "../../../../Entities/Date";

interface ContainerSaidaDebitProps {
  setTotalEntrada: React.Dispatch<React.SetStateAction<number>>;
  setTotalSaida: React.Dispatch<React.SetStateAction<number>>;
}

const ContainerSaidaDebit: React.FC<ContainerSaidaDebitProps> = ({ setTotalEntrada, setTotalSaida }) => {
  const [debitData, setDebitData] = useState<any[]>([]);
  const [dataStart, setDataStart] = useState("");
  const [dataEnd, setDataEnd] = useState("");
  const [tipo, setTipo] = useState<"Entrada" | "Saida" | "">("");

  const fetchData = async () => {
    try {
      const Date: Data = {
        StartDate: dataStart,
        EndDate: dataEnd
      };

      const serviceApiDebit = new ServiceApiDebit();
      let response;

      if (tipo === "Entrada") {
        response = await serviceApiDebit.GetEntrada(Date);
      } else if (tipo === "Saida") {
        response = await serviceApiDebit.GetSaida(Date);
      } else {
        response = await serviceApiDebit.GetEntrada(Date); 
      }

      if (response && Array.isArray(response.data)) {
        setDebitData(response.data);
      }

      if (response && typeof response.total === "number") {
        if (tipo === "Entrada") {
          setTotalEntrada(response.total);
        } else if (tipo === "Saida") {
          setTotalSaida(response.total);
        }
      }
    } catch (error) {
      console.error("Erro ao buscar os dados dos débitos:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dataStart, dataEnd, tipo]); 

  const handleApply = () => {
    fetchData();
  };

  return (
    <ContainerSaida>
      <TableContainer>
        <h1>Transações</h1>
        <select
          id="tipoSelecionado"
          value={tipo}
          onChange={(e) => setTipo(e.target.value as "Entrada" | "Saida" | "")}
        >
          <option value="">Selecione</option>
          <option value="Entrada">Entrada</option>
          <option value="Saida">Saida</option>
        </select>
        <input type="date" value={dataStart} onChange={(e) => setDataStart(e.target.value)} />
        <input type="date" value={dataEnd} onChange={(e) => setDataEnd(e.target.value)} />
        <button onClick={handleApply}>Aplicar</button>
        <Table className="my-table">
          <TableHead>
            <tr>
              <TableHeader>ID</TableHeader>
              <TableHeader>Preço</TableHeader>
              <TableHeader>Descrição</TableHeader>
              <TableHeader>Tipo</TableHeader>
              <TableHeader>Data</TableHeader>
            </tr>
          </TableHead>
          <tbody>
            {debitData.map((debit, index) => (
              <tr key={index}>
                <TableData>{debit.id}</TableData>
                <TableData>{debit.value}</TableData>
                <TableData>{debit.description}</TableData>
                <TableData>{debit.type}</TableData>
                <TableData>{debit.date}</TableData>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </ContainerSaida>
  );
};

export default ContainerSaidaDebit;
