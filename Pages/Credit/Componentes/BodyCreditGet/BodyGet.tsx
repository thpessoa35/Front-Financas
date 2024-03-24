import React, { useEffect, useState } from "react";
import { ContainerSaida, TableContainer, Table, TableHead, TableHeader, TableData } from "./style";
import Data from "../../../../Entities/Date";
import { ServiceApiCredit } from "../../../../Service/ServiceApiCredit";

interface ContainerSaidaDebitProps {
  setTotalSaida: React.Dispatch<React.SetStateAction<number>>;
}

const ContainerSaidaCredit: React.FC<ContainerSaidaDebitProps> = ({ setTotalSaida }) => {
  const [debitData, setDebitData] = useState<any[]>([]);
  const [dataStart, setDataStart] = useState("");
  const [dataEnd, setDataEnd] = useState("");
  const [tipo, setTipo] = useState<"Saida" | "">("");

  const fetchData = async () => {
    try {
      const date: Data = {
        StartDate: dataStart,
        EndDate: dataEnd
      };

      const serviceApiDebit = new ServiceApiCredit();
      let response;

      if (tipo === "Saida") {
        response = await serviceApiDebit.GetSaida(date);
      } else {
        response = await serviceApiDebit.GetSaida(date);
      }

      if (response && Array.isArray(response)) {
        setDebitData(response);
        let soma = 0;
        response.forEach((transaction) => {
          soma += transaction.value;
        });
        setTotalSaida(soma);
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
          onChange={(e) => setTipo(e.target.value as "Saida" | "")}
        >
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

export default ContainerSaidaCredit;
