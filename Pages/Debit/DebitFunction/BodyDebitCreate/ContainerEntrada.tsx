import React, { useEffect, useState } from "react";
import { ContainerEntrada } from "./style";
import ServiceApiDebit from "../../../../Service/ServiceApiDebit";
import Debit from "../../../../Entities/Debit";

const ContainerEntradaDebitFunction: React.FC = () => {
    const serviceApiDebit = new ServiceApiDebit();
    const [valor, setValor] = useState<number | "">("");
    const [texto, setTexto] = useState<string>("");
    const [module, setModule] = useState<string>("");
    const [tipo, setTipo] = useState<"Entrada" | "Saida" | "">("");
    const [tarefa, setTarefa] = useState<string>("");
    const [opcoesModulo, setOpcoesModulo] = useState<string[]>([]);

    useEffect(() => {
        const storedOpcoesModulo = localStorage.getItem("opcoesModulo");
        if (storedOpcoesModulo) {
            setOpcoesModulo(JSON.parse(storedOpcoesModulo));
        }
    }, []);

    const saveOpcoesModuloToLocalStorage = (opcoesModulo: string[]) => {
        localStorage.setItem("opcoesModulo", JSON.stringify(opcoesModulo));
    };

    const handleApply = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!valor || !tipo ) {
            console.error("Por favor, preencha todos os campos.");
            return;
        }

        const debit: Debit = {
            value: valor,
            descricao: texto,
            type: tipo,
            module: module || opcoesModulo[opcoesModulo.length - 1] 
        };

        try {
            await serviceApiDebit.createModule(debit)
            setTexto("");
            setValor("");
            setTipo("");
            setTarefa("");

            
            
        } catch (error) {
            console.error("Erro ao inserir na API:", error);
        }
    };

    const saveModule = () => {
        const novasOpcoesModulo = [...opcoesModulo, tarefa];
        setOpcoesModulo(novasOpcoesModulo);
        saveOpcoesModuloToLocalStorage(novasOpcoesModulo);
        setTarefa("")
    };

    return (
        <ContainerEntrada>
            <label>valor: </label>
            <input
                type="number"
                value={valor}
                onChange={(e) => {
                    const newValue = parseFloat(e.target.value);
                    if (!isNaN(newValue)) {
                        setValor(newValue);
                    }
                }}
            />
            <label>texto:</label>
            <input
                type="text"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />
            <label>criar:</label>
            <input
                type="text"
                value={tarefa}
                onChange={(e) => setTarefa(e.target.value)}
            />
            <label>tipo:</label>
            <select
                id="tipoSelecionado"
                value={tipo}
                onChange={(e) => setTipo(e.target.value as "Entrada" | "Saida" | "")}
            >
                <option value="">Selecione</option>
                <option value="Entrada">Entrada</option>
                <option value="Saida">Saida</option>
            </select>
            <label>modulo:</label>  
            <select
                id="moduloSelecionado"
                className="moduleopcao"
                value={module}
                onChange={(e) => setModule(e.target.value)}
            >
                <option value="">Selecione um módulo</option>
                {opcoesModulo.map(opcao => (
                    <option key={opcao} value={opcao}>{opcao}</option>
                ))}
            </select>
            <button type="submit" className='button-Inserir' onClick={(e) => {handleApply(e); saveModule();}}>Aplicar</button>
           
        </ContainerEntrada>
    );
};

export default ContainerEntradaDebitFunction;
