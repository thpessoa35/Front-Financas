import React, { useEffect, useState } from "react";
import { ContainerSaida, TableContainer, Table, TableHead, TableHeader, TableData } from "./style";
import ServiceApiDebit from "../../../../Service/ServiceApiDebit";
import Data from "../../../../Entities/Date";

interface ContainerSaidaDebitProps {
    setTotalEntrada: React.Dispatch<React.SetStateAction<number>>;
    setTotalSaida: React.Dispatch<React.SetStateAction<number>>;
}

const ContainerSaidaDebitFunction: React.FC<ContainerSaidaDebitProps> = ({ setTotalEntrada, setTotalSaida }) => {
    const [debitData, setDebitData] = useState<any[]>([]);
    const [dataStart, setDataStart] = useState("");
    const [dataEnd, setDataEnd] = useState("");
    const [module, setModule] = useState("");
    const [tipo, setTipo] = useState<"Entrada" | "Saida" | "">("");
    const [opcoesModulo, setOpcoesModulo] = useState<string[]>([]);

    useEffect(() => {
        const storedOpcoesModulo = localStorage.getItem("opcoesModulo");
        if (storedOpcoesModulo) {
            setOpcoesModulo(JSON.parse(storedOpcoesModulo));
        }
    }, []);

    const fetchData = async () => {
        try {
            const Date: Data = {
                StartDate: dataStart,
                EndDate: dataEnd,
                module: module || opcoesModulo[opcoesModulo.length - 1] 
            };

            const serviceApiDebit = new ServiceApiDebit();
            let response;

            if (tipo === "Entrada") {
                response = await serviceApiDebit.GetEntradaFunction(Date);
                console.log(response)
            } else if (tipo === "Saida") {
                response = await serviceApiDebit.GetSaidaFunction(Date);    
            }

            if (response && Array.isArray(response.message.data)) {
                setDebitData(response.message.data);
            }

            if (response && typeof response.message.total === "number") {
                if (tipo === "Entrada") {
                    setTotalEntrada(response.message.total);
                } else if (tipo === "Saida") {
                    setTotalSaida(response.message.total);
                }
            }
        } catch (error) {
            console.error("Erro ao buscar os dados dos débitos:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [dataStart, dataEnd, tipo, module]);

    const handleApply = () => {
        fetchData();
    };

    const handleModuleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newModule = e.target.value;
        setModule(newModule);
        
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
                <select
                    value={module} className="module"
                    onChange={handleModuleChange}
                >
                    {opcoesModulo.map(opcao => (
                        <option key={opcao} value={opcao}>{opcao}</option>
                    ))}
                </select>
                <button onClick={handleApply}>Aplicar</button>
                <Table className="my-table">
                    <TableHead>
                        <tr>
                            <TableHeader>ID</TableHeader>
                            <TableHeader>Preço</TableHeader>
                            <TableHeader>Descrição</TableHeader>
                            <TableHeader>Tipo</TableHeader>
                            <TableHeader>Modulo</TableHeader>
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
                                <TableData>{debit.module}</TableData>
                                <TableData>{debit.date}</TableData>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>
        </ContainerSaida>
    );
};

export default ContainerSaidaDebitFunction;
