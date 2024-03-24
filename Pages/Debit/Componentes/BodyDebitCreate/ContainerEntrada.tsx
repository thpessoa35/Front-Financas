import React, { useEffect, useState } from "react";
import { ContainerEntrada } from "./style";
import ServiceApiDebit from "../../../../Service/ServiceApiDebit";
import Debit from "../../../../Entities/Debit";



const ContainerEntradaDebit: React.FC = () => {
    const serviceApiDebit = new ServiceApiDebit();
    const [valor, setValor] = useState<number | "">("");
    const [texto, setTexto] = useState<string>("");
    const [tipo, setTipo] = useState<"Entrada" | "Saida" | "">("");

    
    const handleApply = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!valor || !tipo) {
            console.error("Por favor, preencha todos os campos.");
            return;
        }

        const debit: Debit = {
            value: valor,
            descricao: texto,
            type: tipo,
          
        };

        try {
            await serviceApiDebit.create(debit);
            setTexto("");
            setTipo("");
        } catch (error) {
            console.error("Erro ao inserir na API:", error);
        }
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

          

            <button type="submit" className='button-Inserir' onClick={handleApply}>Aplicar</button>
        </ContainerEntrada>
    );
};

export default ContainerEntradaDebit;
